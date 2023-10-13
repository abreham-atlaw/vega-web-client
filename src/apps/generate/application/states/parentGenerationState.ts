import BaseState from "@/lib/state/baseState";
import type GenerateQuery from "../../data/models/generateQuery";


export enum ParentGenerationStage{

    input,
    generation,

}

export default class ParentGenerationState extends BaseState{

    stage: ParentGenerationStage = ParentGenerationStage.input;
    query?: GenerateQuery;

}