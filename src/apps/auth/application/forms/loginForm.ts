import type Field from "@/lib/forms/fields";
import { TextField } from "@/lib/forms/fields";
import Form from "@/lib/forms/form";



export default class LoginForm extends Form{

	phoneNumber: Field<string> = new TextField();
	password: Field<string> = new TextField()


	getFields(): Field<any>[] {
		return [
			this.phoneNumber,
			this.password
		]
	}

}