import CoreProviders from "@/di/coreProviders";
import type AuthenticatedNetworkClient from "@/lib/network/AuthenticatedNetworkClient";
import GenerateRequest from "../requests/generateRequest";
import type GenerateQuery from "../models/generateQuery";
import type { GenerationStatus } from "../models/statusResponse";
import GetGenerationStatusRequest from "../requests/getStatusRequest";
import type StatusResponse from "../models/statusResponse";



export default class GenerateRepository{

    private networkClient: Promise<AuthenticatedNetworkClient> = CoreProviders.provideAuthenticatedNetworkClient();

    async generate(query: GenerateQuery): Promise<string>{
        return await (await this.networkClient).execute(new GenerateRequest(query));
    }

    async getStatus(id: string): Promise<StatusResponse>{
        return await (await this.networkClient).execute(new GetGenerationStatusRequest(id));
    }

}