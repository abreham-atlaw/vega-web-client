import AsyncViewModel from "@/lib/viewmodel/asyncViewModel";
import type InputState from "../states/inputState";
import { InputStage } from "../states/inputState";


export default class InputViewModel extends AsyncViewModel<InputState>{


    private stageOrders = [
        InputStage.genre,
        InputStage.timeEra,
        InputStage.mood,
        InputStage.instruments,
        InputStage.lyrics,
        InputStage.done
    ];

    private nextStage(): InputStage{
        return this.stageOrders[this.stageOrders.indexOf(this.state.stage) + 1];
    }

    private previousStage(): InputStage{
        return this.stageOrders[this.stageOrders.indexOf(this.state.stage) - 1];
    }

    private next(){
        this.state.stage = this.nextStage();
    }

    selectGenre(genre: string){
        this.state.input.genre = genre;
        this.next();
    }

    selectTimeEra(timeEra: string){
        this.state.input.era = timeEra;
        this.next()
    }

    selectMood(mood: string){
        this.state.input.mood = mood;
        this.next();
    }

    selectInstruments(instruments: string[]){
        this.state.input.instruments = instruments;
        this.next();
    }

    selectLyricsType(lyricsTypes: string[]){
        this.state.input.lyricsType = lyricsTypes;
        this.next();
    }

}