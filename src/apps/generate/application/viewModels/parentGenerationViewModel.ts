import AsyncViewModel from "@/lib/viewmodel/asyncViewModel";
import type ParentGenerationState from "../states/parentGenerationState";
import GenerateRepository from "../../data/repositories/generateRepository";
import type GenerateQuery from "../../data/models/generateQuery";
import { ParentGenerationStage } from "../states/parentGenerationState";



export default class ParentGenerationViewModel extends AsyncViewModel<ParentGenerationState>{

    generate(query: GenerateQuery){
        this.state.stage = ParentGenerationStage.generation;
        this.state.query = query;
    }
    

}