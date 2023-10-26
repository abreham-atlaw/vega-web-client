import BaseState from "@/common/state/baseState";
import type GenerateQuery from "../../data/models/generateQuery";
import InputForm from "../forms/inputForm";
import { AsyncState } from "@/common/state/asyncState";


export enum InputStage{

    mode,
    input,
    done

}

export enum InputMode{
    raw,
    guided
}

export default class InputState extends AsyncState{

    generateQuery?: GenerateQuery;
    rawQuery?: string;

    stage = InputStage.mode;

    form = new InputForm();


    get mode(): InputMode{
        return this.form.mode.getValue()!;
    }
}