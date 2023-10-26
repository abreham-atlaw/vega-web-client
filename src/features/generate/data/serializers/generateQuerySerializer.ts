import Serializer from "@/common/serializers/serializer";
import type GenerateQuery from "../models/generateQuery";


export default class GenerateQuerySerializer extends Serializer<GenerateQuery, any>{
    serialize(instance: GenerateQuery) {

        return {
            "genre": instance.genre ?? null,
            "era": instance.era ?? null,
            "mood": instance.mood ?? null,
            "lyrics": instance.lyricsType ?? null,
            "instruments": instance.instruments ?? null
        }
    }

    deserialize(data: any): GenerateQuery {
        throw new Error("Method not implemented.");
    }

}