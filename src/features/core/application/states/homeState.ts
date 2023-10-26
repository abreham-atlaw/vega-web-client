import type GenerateQuerySample from "@/features/generate/data/models/generateQuerySample";
import BaseState from "@/common/state/baseState";
import type Song from "../../data/models/song";
import type Playlist from "../../data/models/playlist";



export default class HomeState extends BaseState{


    recommendations?: GenerateQuerySample[];
    popular?: GenerateQuerySample[];

    recents?: Song[];

    playlists?: Playlist[];

}