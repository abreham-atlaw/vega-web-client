import AsyncViewModel from "@/common/viewmodel/asyncViewModel";
import type SignupState from "../states/signupState";
import AuthRepository from "../../data/repository/authRepository";



export default class SignupViewModel extends AsyncViewModel<SignupState>{

	private authRepository = new AuthRepository();	

	async signup(){
		await this.asyncCall(
			async () => {
				await this.state.form.validate(true);
				await this.authRepository.signup(
					this.state.form.email.getValue()!,
					this.state.form.fullName.getValue()!,
					this.state.form.password.getValue()!
				);
			}
		)
	}

}