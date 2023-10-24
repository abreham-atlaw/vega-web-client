import Serializer from "@/lib/serializers/serializer";
import GenerateQuerySample from "../models/generateQuerySample";


export default class GenerateQuerySampleSerializer extends Serializer<GenerateQuerySample, Record<string, any>> {
  deserialize(data: Record<string, any>): GenerateQuerySample {
    return new GenerateQuerySample({
      title: data["title"],
      coverImage: data["cover"],
      era: data["era"],
      genre: data["genre"],
      instruments: data["instruments"],
      lyricsType: data["lyrics"],
      mood: data["mood"]
    });
  }

  serialize(instance: GenerateQuerySample): Record<string, any> {
    throw new Error("Method not implemented.");
  }
}
