import BaseState from "@/lib/state/baseState";
import type Playlist from "../../data/models/playlist";



export class PlaylistState extends BaseState{


    playlist?: Playlist;
    playlistId: string;

    constructor(playlistId: string){
        super();
        this.playlistId = playlistId;
    }

}