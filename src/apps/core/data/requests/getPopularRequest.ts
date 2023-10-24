import type GenerateQuerySample from "@/apps/generate/data/models/generateQuerySample";
import GenerateQuerySampleSerializer from "@/apps/generate/data/serializers/generateQuerySampleSerializer";
import Request from "@/lib/network/Request";


export default class GetPopularRequest extends Request<GenerateQuerySample[]>{

    private readonly serializer = new GenerateQuerySampleSerializer();

    constructor(){
        super({
            url: "core/popular/",
            method: "GET"
        })
    }

    deserializeResponse(response: any): GenerateQuerySample[] {
        return this.serializer.deserializeMany(response);
    }

}