import CoreProviders from "@/dependency_injection/coreProviders";
import type NetworkClient from "@/common/network/NetworkClient";
import GetSongRequest from "../requests/getSongRequest";
import GetRecentRequest from "../requests/getRecentsRequest";
import type Song from "../models/song";
import type Playlist from "../models/playlist";
import {GetAllPlaylistsRequest, GetPlaylistRequest} from "../requests/playlistRequests";


export default class LibraryRepository {
  private readonly _networkClient: NetworkClient = CoreProviders.provideNetworkClient();

  private _authenticatedNetworkClient = CoreProviders.provideAuthenticatedNetworkClient();

  public async getSong(id: string): Promise<Song> {
    return await this._networkClient.execute(new GetSongRequest(id));
  }

  public async getRecent(): Promise<Song[]> {
    return await this._networkClient.execute(new GetRecentRequest());
  }

  public async getAllPlaylists(): Promise<Playlist[]> {
    return await (await this._authenticatedNetworkClient).execute(new GetAllPlaylistsRequest());
  }

  public async getPlaylist(id: string): Promise<Playlist>{
    return await (await this._authenticatedNetworkClient).execute(new GetPlaylistRequest(id));
  }

}
