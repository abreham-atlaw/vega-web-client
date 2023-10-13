import AsyncViewModel from "@/lib/viewmodel/asyncViewModel";
import GenerateState from "../states/generateState";
import GenerateRepository from "../../data/repositories/generateRepository";
import StatusResponse, { GenerationStatus } from "../../data/models/statusResponse";
import SongRepository from "@/apps/core/data/repositories/songRepository";
import RoutingUtils from "@/lib/utils/routing";
import PlayerProviders from "@/di/playerProviders";


export default class GenerateViewModel extends AsyncViewModel<GenerateState>{

    private readonly repository = new GenerateRepository();
    private readonly songRepository = new SongRepository();
    private readonly INTERVAL = 1000;

    public async onInit(): Promise<void> {
        await super.onInit();
        this.state.requestId = await this.repository.generate(this.state.query);
        this.state.response = new StatusResponse(GenerationStatus.none);
        setInterval(
            () => {
                this.updateStatus()
            },
            this.INTERVAL
        );
    }

    private async updateStatus(): Promise<void>{
        this.asyncCall( async () => {
            this.state.response = await this.repository.getStatus(this.state.requestId!);
            if(this.state.response.status === GenerationStatus.done){
                this.state.song = await this.songRepository.getSong(this.state.response.songId!);
            }
        });
    }

    public async download(): Promise<void>{
        await this.asyncCall(
            async () => {
                await RoutingUtils.download(this.state.song!.audioUrl, this.state.song!.title);
            },
            this.state.downloadState
        )
    }

    public async play(): Promise<void>{
        PlayerProviders.providePlayer().playSong(this.state.song!);
    }

}