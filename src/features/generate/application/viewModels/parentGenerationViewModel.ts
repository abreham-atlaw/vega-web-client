import AsyncViewModel from "@/common/viewmodel/asyncViewModel";
import type ParentGenerationState from "../states/parentGenerationState";
import GenerateRepository from "../../data/repositories/generateRepository";
import type GenerateQuery from "../../data/models/generateQuery";
import { ParentGenerationStage } from "../states/parentGenerationState";



export default class ParentGenerationViewModel extends AsyncViewModel<ParentGenerationState>{

    generate(query?: GenerateQuery, rawQuery?: string){
        this.state.query = query;
        this.state.rawQuery = rawQuery;
        this.state.stage = ParentGenerationStage.generation;
    }

}