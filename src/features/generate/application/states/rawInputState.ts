import BaseState from "@/common/state/baseState";
import { RawInputForm } from "../forms/rawInputForm";
import { AsyncState } from "@/common/state/asyncState";


export default class RawInputState extends AsyncState{

    form = new RawInputForm();

}