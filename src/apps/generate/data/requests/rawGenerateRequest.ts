import Request from "@/lib/network/Request";



export default class RawGenerateRequest extends Request<string>{

    constructor(query: string){
        super({
            url: "core/song/generate-raw/",
            method: "POST",
            data: {
                "query": query
            }
        })
    }

    deserializeResponse(response: any): string {
        return response.request_id
    }

}