// class GenerateRequest extends Request<String>{

import Request from "@/lib/network/Request";
import GenerateQuerySerializer from "../serializers/generateQuerySerializer";
import type GenerateQuery from "../models/generateQuery";


export default class GenerateRequest extends Request<string>{

    constructor(query: GenerateQuery){
        const serializer = new GenerateQuerySerializer();
        super({
            url: "core/song/generate/",
            method: "POST",
            data: serializer.serialize(query)
        });
    }

    deserializeResponse(response: any): string {
        return response.request_id
    }

}