import type GenerateQuerySample from "@/apps/generate/data/models/generateQuerySample";
import BaseState from "@/lib/state/baseState";
import type Song from "../../data/models/song";
import type Playlist from "../../data/models/playlist";



export default class HomeState extends BaseState{


    recommendations?: GenerateQuerySample[];
    popular?: GenerateQuerySample[];

    recents?: Song[];

    playlists?: Playlist[];

}