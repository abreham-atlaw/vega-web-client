import { AsyncState } from "@/common/state/asyncState"
import BaseState from "@/common/state/baseState"
import SignupForm from "../forms/signupForm"


export default class SignupState extends AsyncState{

	form = new SignupForm();

}