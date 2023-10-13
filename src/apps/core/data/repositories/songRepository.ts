import type GenerateQuery from "@/apps/generate/data/models/generateQuery";
import type StatusResponse from "@/apps/generate/data/models/statusResponse";
import GenerateRequest from "@/apps/generate/data/requests/generateRequest";
import GetGenerationStatusRequest from "@/apps/generate/data/requests/getStatusRequest";
import CoreProviders from "@/di/coreProviders";
import type NetworkClient from "@/lib/network/NetworkClient";
import GetSongRequest from "../requests/getSongRequest";
import GetRecentRequest from "../requests/getRecentsRequest";
import type Song from "../models/song";


export default class SongRepository {
  private readonly _networkClient: NetworkClient = CoreProviders.provideNetworkClient();

  private _authenticatedNetworkClient = CoreProviders.provideAuthenticatedNetworkClient();

  public async getSong(id: string): Promise<Song> {
    return await this._networkClient.execute(new GetSongRequest(id));
  }

  public async getRecent(): Promise<Song[]> {
    return await this._networkClient.execute(new GetRecentRequest());
  }

}
