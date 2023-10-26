import AsyncViewModel from "@/common/viewmodel/asyncViewModel";
import type HomeState from "../states/homeState";
import LibraryRepository from "../../data/repositories/libraryRepository";
import QuerySampleRepository from "../../data/repositories/querySampleRepository";




export default class HomeViewModel extends AsyncViewModel<HomeState>{

    private libraryRepository = new LibraryRepository();
    private querySampleRepository = new QuerySampleRepository();

    public async onInit(): Promise<void> {
        await super.onInit()

        this.state.recommendations = await this.querySampleRepository.getRecommendations();
        // this.state.popular = await this.querySampleRepository.getPopular();
        this.state.recents = await this.libraryRepository.getRecent();
        this.state.playlists = await this.libraryRepository.getAllPlaylists();
    }



}