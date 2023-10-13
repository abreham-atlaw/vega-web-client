import { AsyncState } from "@/lib/state/asyncState";
import type StatusResponse from "../../data/models/statusResponse";
import type GenerateQuery from "../../data/models/generateQuery";
import BaseState from "@/lib/state/baseState";
import type Song from "@/apps/core/data/models/song";


export default class GenerateState extends AsyncState{


    response?: StatusResponse;
    requestId?: string;
    song?: Song;
    query: GenerateQuery;

    downloadState: AsyncState = new AsyncState();


    constructor(query: GenerateQuery){
        super();
        this.query = query;
    }


}