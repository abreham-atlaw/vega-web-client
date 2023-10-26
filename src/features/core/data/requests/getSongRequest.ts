import Request from "@/common/network/Request";
import SongSerializer from "../serializers/songSerializer";
import type Song from "../models/song";

  
export default class GetSongRequest extends Request<Song>{

    private serializer = new SongSerializer();

    constructor(id: string){
        super({
            url: "core/song/detail/",
            method: "GET",
            params: {
                "id": id
            }
        })
    }

    deserializeResponse(response: any): Song {
        return this.serializer.deserialize(response);
    }

}