import Request from "@/lib/network/Request";
import type Song from "../models/song";
import type Playlist from "../models/playlist";


export default class AddToPlaylistRequest extends Request<void>{

    constructor(song: Song, playlist: Playlist){
        super({
            url: "core/playlist/add/",
            method: "POST",
            data: {
                "song_id": song.id,
                "playlist_id": playlist.id
            }
        })
    }

}