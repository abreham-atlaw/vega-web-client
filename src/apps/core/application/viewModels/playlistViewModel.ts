import AsyncViewModel from "@/lib/viewmodel/asyncViewModel";
import type { PlaylistState } from "../states/playlistState";
import LibraryRepository from "../../data/repositories/libraryRepository";




export default class PlaylistViewModel extends AsyncViewModel<PlaylistState>{

    private repository = new LibraryRepository();

    public async onInit(): Promise<void> {
        await super.onInit();
        this.state.playlist = await this.repository.getPlaylist(this.state.playlistId);
    }

} 