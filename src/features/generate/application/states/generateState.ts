import { AsyncState } from "@/common/state/asyncState";
import type StatusResponse from "../../data/models/statusResponse";
import type GenerateQuery from "../../data/models/generateQuery";
import BaseState from "@/common/state/baseState";
import type Song from "@/features/core/data/models/song";


export default class GenerateState extends AsyncState{


    response?: StatusResponse;
    requestId?: string;
    song?: Song;
    query?: GenerateQuery;
    rawQuery?: string;


    downloadState: AsyncState = new AsyncState();


    constructor({
        query,
        rawQuery
    }: {
        query?: GenerateQuery,
        rawQuery?: string
    }){
        super();
        this.query = query;
        this.rawQuery = rawQuery;
    }

    public get isRaw(): boolean{
        return this.query === null || this.query === undefined;
    }

    // constructor({
    //     query?: GenerateQuery, rawQuery?: string){
    //     super();
    //     this.query = query;
    // }


}