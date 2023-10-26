import type Field from "@/common/forms/fields";
import { TextField } from "@/common/forms/fields";
import Form from "@/common/forms/form";
import AuthRepository from "../../data/repository/authRepository";



export default class SignupForm extends Form{
	
	private authRepository = new AuthRepository();

	email = new TextField(
		true,
		async (value: string) => {
			const exists = await this.authRepository.userExists(value);
			if(exists){
				return "User with this email already exists."
			}
			return null;
		}
	);
	fullName = new TextField();
	password = new TextField();
	confirmPassword = new TextField(
		true,
		(value: string) => {
			if(value != this.password.getValue()){
				return "Passwords don't match."
			}
			return null;
		}
	);
	
	getFields(): Field<any>[] {
		return [
			this.email,
			this.fullName,
			this.password,
			this.confirmPassword
		]
	}

}