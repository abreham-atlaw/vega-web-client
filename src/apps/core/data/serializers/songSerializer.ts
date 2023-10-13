import Serializer from "@/lib/serializers/serializer";
import Song from "@/apps/core/data/models/song";


export default class SongSerializer extends Serializer<Song, Record<string, any>> {
  deserialize(data: Record<string, any>): Song {
    return new Song(
      data["id"],
      data["audio"],
      data["cover"],
      data["title"],
      data["lyrics"],
    );
  }

  serialize(instance: Song): Record<string, any> {
    throw new Error("Method not implemented.");
  }
}
