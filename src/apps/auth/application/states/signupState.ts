import { AsyncState } from "@/lib/state/asyncState"
import BaseState from "@/lib/state/baseState"
import SignupForm from "../forms/signupForm"


export default class SignupState extends AsyncState{

	form = new SignupForm();

}