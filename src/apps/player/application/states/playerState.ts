import type Song from "@/apps/core/data/models/song";
import { AsyncState } from "@/lib/state/asyncState";
import BaseState from "@/lib/state/baseState";


export enum RepeatMode{
    one,
    noRepeat,
    repeatQueue
}


export default class PlayerState extends BaseState{

    originalQueue: Song[] = [];
    queue: Song[] = this.originalQueue;
    currentIdx: number | null = null;
    
    isPlaying: boolean = false;
    isShuffle: boolean = false;
    repeatMode: RepeatMode = RepeatMode.noRepeat;

    duration: number = 0;
    currentTime: number = 0;

    downloadState: AsyncState = new AsyncState();

    htmlAudio: HTMLAudioElement = new Audio();

    get currentSong(): Song{
        return this.queue[this.currentIdx!];
    }

}