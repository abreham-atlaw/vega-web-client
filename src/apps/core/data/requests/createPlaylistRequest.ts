import Request from "@/lib/network/Request";
import type Playlist from "../models/playlist";



export default class CreatePlaylistRequest extends Request<Playlist>{

    constructor(title: string){
        super({
            url: "core/playlist/create/",
            method: "POST",
            data: {
                "title": title
            }
        })
    }


}