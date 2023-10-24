import BaseState from "@/lib/state/baseState";
import { RawInputForm } from "../forms/rawInputForm";
import { AsyncState } from "@/lib/state/asyncState";


export default class RawInputState extends AsyncState{

    form = new RawInputForm();

}