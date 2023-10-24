import AsyncViewModel from "@/lib/viewmodel/asyncViewModel";
import type LibraryState from "../states/libraryState";
import LibraryRepository from "../../data/repositories/libraryRepository";



export default class LibraryViewModel extends AsyncViewModel<LibraryState>{

    private repository = new LibraryRepository();

    public async onInit(): Promise<void> {
        await super.onInit();
        this.state.playlists = await this.repository.getAllPlaylists();
        this.state.recents = await this.repository.getRecent();
    }

}