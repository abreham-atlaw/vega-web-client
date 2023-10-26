import AsyncViewModel from "@/common/viewmodel/asyncViewModel";
import type PlayerState from "../states/playerState";
import type Song from "@/features/core/data/models/song";
import LibraryRepository from "@/features/core/data/repositories/libraryRepository";
import RoutingUtils from "@/common/utils/routing";
import type Playlist from "@/features/core/data/models/playlist";



export default class PlayerViewModel extends AsyncViewModel<PlayerState>{

    private songRepository = new LibraryRepository();


    public async onInit(): Promise<void> {
        await super.onInit();
        this.state.htmlAudio.ontimeupdate = this.updateTime;
        this.state.htmlAudio.onended = this.onEnded;
    }

    get currentSong(): Song | null{
        try{
            return this.state.currentSong ?? null;
        }
        catch(ex){
            return null;
        }
    }

    async play(): Promise<void>{
        this.state.htmlAudio.play();
        this.state.isPlaying = true;
        console.log(`Playing ${this.state.currentSong.title}`);
    }

    async pause(): Promise<void>{
        this.state.htmlAudio.pause();
        this.state.isPlaying = false;
    }

    async next(){
        this.playOnQueue(this.state.currentIdx! + 1)
    }

    async previous(){
        this.playOnQueue(this.state.currentIdx! - 1)
    }

    async playSongById(id: string): Promise<void>{
        const song = await this.songRepository.getSong(id);
        await this.playSong(song);
    }

    async playSong(song: Song): Promise<void>{
        this.addToQueue([song]);
        this.playOnQueue(this.state.queue.length - 1);
    }

    async playPlaylist(playlist: Playlist){
        await this.clearQueue();
        await this.addToQueue(playlist.songs);
        await this.playOnQueue(0);
    }

    async addToQueue(songs: Song[]): Promise<void>{

        songs.forEach(
            (song: Song) => {
                this.state.originalQueue.push(song);
                this.state.queue.push(song);
            }
        )

    }

    async playOnQueue(index: number): Promise<void>{
        this.state.currentIdx = index;
        this.state.htmlAudio.src = this.state.currentSong.audioUrl;
        this.play();
    }

    async clearQueue(): Promise<void>{
        this.state.originalQueue = [];
        this.state.queue = [];
    }

    async seek(time?: number): Promise<void>{
        if(time !== undefined){
            this.state.currentTime = time;
        }
        this.state.htmlAudio.currentTime = this.state.currentTime;
    }

    public async download(): Promise<void>{
        await this.asyncCall(
            async () => {
                await RoutingUtils.download(this.state.currentSong!.audioUrl, this.state.currentSong!.title);
            },
            this.state.downloadState
        )
    }

    private updateTime = (event: Event) => {
        this.state.duration = Math.round((event as any).target.duration);
        this.state.currentTime = Math.round((event as any).target.currentTime);
    }
    
    private onEnded = (event: Event) => {
        if(this.state.currentIdx === this.state.queue.length - 1){
            this.state.isPlaying = false;
            return;
        }
        this.next();
    }




}