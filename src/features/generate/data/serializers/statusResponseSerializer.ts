import Serializer from "@/common/serializers/serializer";
import StatusResponse, { GenerationStatus } from "../models/statusResponse";


export default class StatusResponseSerializer extends Serializer<StatusResponse, any>{
    serialize(instance: StatusResponse) {
        throw new Error("Method not implemented.");
    }
    deserialize(data: any): StatusResponse {
        return new StatusResponse(
            data.status as GenerationStatus,
            data.song
        );
    }
}