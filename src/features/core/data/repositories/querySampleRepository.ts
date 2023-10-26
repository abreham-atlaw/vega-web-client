import type GenerateQuerySample from "@/features/generate/data/models/generateQuerySample";
import CoreProviders from "@/dependency_injection/coreProviders";
import GetRecommendationsRequest from "../requests/getRecommendationRequest";
import GetPopularRequest from "../requests/getPopularRequest";


export default class QuerySampleRepository{

    private readonly networkClient = CoreProviders.provideAuthenticatedNetworkClient();

    async getRecommendations(): Promise<GenerateQuerySample[]>{
        return await (await this.networkClient).execute(new GetRecommendationsRequest());
    }

    async getPopular(): Promise<GenerateQuerySample[]>{
        return await (await this.networkClient).execute(new GetPopularRequest());
    }

}