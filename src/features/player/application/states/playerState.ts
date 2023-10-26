import type Song from "@/features/core/data/models/song";
import { AsyncState } from "@/common/state/asyncState";
import BaseState from "@/common/state/baseState";


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