import AsyncViewModel from "@/lib/viewmodel/asyncViewModel";
import type LoginState from "../states/loginState";
import AuthRepository from "../../data/repository/authRepository";




export default class LoginViewModel extends AsyncViewModel<LoginState>{

	private authRepository = new AuthRepository();

	public async login(){

		await this.asyncCall(
			async () => {
				await this.state.form.validate(true);
				await this.authRepository.login(
					this.state.form.phoneNumber.getValue()!,
					this.state.form.password.getValue()!
				);
			}
		);

	}

}