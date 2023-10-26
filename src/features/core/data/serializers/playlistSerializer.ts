import Serializer from "@/common/serializers/serializer";
import Playlist from "../models/playlist";
import SongSerializer from "./songSerializer";



export default class PlaylistSerializer extends Serializer<Playlist, Record<string, any>>{

    private songSerializer = new SongSerializer();

    serialize(instance: Playlist): Record<string, any> {
        throw new Error("Method not implemented.");
    }

    deserialize(data: Record<string, any>): Playlist {

        return new Playlist({
            id: data["id"],
            songs: this.songSerializer.deserializeMany(data["songs"]),
            title: data["title"],
            cover: data["cover"]
        });

    }




}