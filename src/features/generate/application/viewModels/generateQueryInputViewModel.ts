import AsyncViewModel from "@/common/viewmodel/asyncViewModel";
import type GenerateQueryInputState from "../states/generateQueryInputState";
import { GenerateQueryInputStage } from "../states/generateQueryInputState";


export default class GenerateQueryInputViewModel extends AsyncViewModel<GenerateQueryInputState>{


    private stageOrders = [
        GenerateQueryInputStage.genre,
        GenerateQueryInputStage.timeEra,
        GenerateQueryInputStage.mood,
        GenerateQueryInputStage.instruments,
        GenerateQueryInputStage.lyrics,
        GenerateQueryInputStage.done
    ];

    private nextStage(): GenerateQueryInputStage{
        return this.stageOrders[this.stageOrders.indexOf(this.state.stage) + 1];
    }

    private previousStage(): GenerateQueryInputStage{
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