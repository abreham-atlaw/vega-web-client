import BaseState from "@/lib/state/baseState";
import GenerateQuery from "../../data/models/generateQuery";
import { AsyncState } from "@/lib/state/asyncState";


export enum GenerateQueryInputStage{

    genre,
    timeEra,
    mood,
    instruments,
    lyrics,
    done

}


export default class GenerateQueryInputState extends AsyncState{

    stage: GenerateQueryInputStage = GenerateQueryInputStage.genre
    input: GenerateQuery = new GenerateQuery();

}