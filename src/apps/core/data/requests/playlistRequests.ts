import Request from "@/lib/network/Request";
import type Playlist from "../models/playlist";
import PlaylistSerializer from "../serializers/playlistSerializer";




export class GetAllPlaylistsRequest extends Request<Playlist[]>{

    private serializer = new PlaylistSerializer();

    constructor(){
        super({
            url: "core/playlist/all/"
        })
    }

    deserializeResponse(response: any): Playlist[] {
        return this.serializer.deserializeMany(response);
    }
        
}


export class GetPlaylistRequest extends Request<Playlist>{

    private serializer = new PlaylistSerializer();


    constructor(id: string){
        super({
            url: `core/playlist/detail?id=${id}`
        })
    }

    deserializeResponse(response: any): Playlist {
        return this.serializer.deserialize(response);
    }

}