import { AsyncState } from "@/lib/state/asyncState";
import type User from "../../data/models/user";



export default class DeleteAccountState extends AsyncState{

	user?: User;

}