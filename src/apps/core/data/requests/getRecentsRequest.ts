import Request from "@/lib/network/Request";
import SongSerializer from "../serializers/songSerializer";
import type Song from "../models/song";
  

export default class GetRecentRequest extends Request<Song[]>{

    private readonly serializer = new SongSerializer();

    constructor(){
        super({
            "url": "core/recents/",
            method: "GET"
        });
    }

    deserializeResponse(response: any): Song[] {
        return this.serializer.deserializeMany(response);
    }

}