import BaseState from "@/common/state/baseState";
import type Playlist from "../../data/models/playlist";
import type Song from "../../data/models/song";




export default class LibraryState extends BaseState{

    playlists?: Playlist[];
    recents?: Song[];

}