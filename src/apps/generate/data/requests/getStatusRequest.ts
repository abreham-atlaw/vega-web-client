// class GetGenerationStatusRequest extends Request<StatusResponse>{

import Request from "@/lib/network/Request";
import StatusResponse from "../models/statusResponse";
import StatusResponseSerializer from "../serializers/statusResponseSerializer";


export default class GetGenerationStatusRequest extends Request<StatusResponse>{


    private readonly serializer = new StatusResponseSerializer();

    constructor(id: string){
        super({
            url: "core/song/status",
            method: "GET",
            params: {
                id: id
            }
        })

    }

    deserializeResponse(response: any): StatusResponse {
        return this.serializer.deserialize(response);
    }

}