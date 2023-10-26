import type Field from "@/common/forms/fields";
import { TextField } from "@/common/forms/fields";
import Form from "@/common/forms/form";



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