import AsyncViewModel from "@/common/viewmodel/asyncViewModel";
import type DeleteAccountState from "../states/deleteAccountState";
import AuthRepository from "../../data/repository/authRepository";




export default class DeleteAccountViewModel extends AsyncViewModel<DeleteAccountState>{

	private repository: AuthRepository = new AuthRepository();

	public async onInit(): Promise<void> {
		await super.onInit();
		this.state.user = await this.repository.me();
	}


	async delete(){
		await this.asyncCall(
			async () => {
				await this.repository.deleteAccount();
			}
		)
	}

}