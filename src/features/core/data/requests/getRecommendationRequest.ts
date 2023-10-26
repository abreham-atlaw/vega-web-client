import type GenerateQuerySample from "@/features/generate/data/models/generateQuerySample";
import GenerateQuerySampleSerializer from "@/features/generate/data/serializers/generateQuerySampleSerializer";
import Request from "@/common/network/Request";


export default class GetRecommendationsRequest extends Request<GenerateQuerySample[]>{

    private readonly serializer = new GenerateQuerySampleSerializer();

    constructor(){
        super({
            url: "core/query/recommendations/",
            method: "GET"
        });
    }

    deserializeResponse(response: any): GenerateQuerySample[] {
        return this.serializer.deserializeMany(response);
    }

}