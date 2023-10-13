import BaseState from "@/lib/state/baseState";
import GenerateQuery from "../../data/models/generateQuery";
import { AsyncState } from "@/lib/state/asyncState";


export enum InputStage{

    genre,
    timeEra,
    mood,
    instruments,
    lyrics,
    done

}


export default class InputState extends AsyncState{

    stage: InputStage = InputStage.genre
    input: GenerateQuery = new GenerateQuery();

}