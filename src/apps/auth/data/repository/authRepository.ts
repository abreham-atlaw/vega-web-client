import CoreProviders from "@/di/coreProviders";
import type NetworkClient from "@/lib/network/NetworkClient";
import { DeleteAccountRequest, LoginRequest, WhoAmIRequest } from "../requests/authRequests";
import AuthenticationStatus from "../models/authenticationStatus";
import type AuthenticatedNetworkClient from "@/lib/network/AuthenticatedNetworkClient";
import type TokenStorage from "@/lib/utils/tokenStorage";
import { ApiException } from "@/lib/network/NetworkClient";
import type User from "../models/user";
import { AxiosError } from "axios";



export default class AuthRepository{

	networkClient: NetworkClient = CoreProviders.provideNetworkClient();
	authenticatedNetworkClient: Promise<AuthenticatedNetworkClient> = CoreProviders.provideAuthenticatedNetworkClient();
	tokenStorage: TokenStorage = CoreProviders.provideTokenStorage();
	
	async login(username: string, password: string): Promise<void>{
		let token = await this.networkClient.execute(new LoginRequest(username, password));
		await this.tokenStorage.store(token);
	}

	async me(): Promise<User>{
		return await (await this.authenticatedNetworkClient).execute(new WhoAmIRequest());
	}

	async deleteAccount(): Promise<void>{
		return await (await this.authenticatedNetworkClient).execute(new DeleteAccountRequest());
	}

	async getAuthenticationStatus(): Promise<AuthenticationStatus>{

		if((await this.tokenStorage.get()) === null){
			return AuthenticationStatus.none;
		}
		try{
			await this.me();
			return AuthenticationStatus.authenticated;
		}
		catch(ex){
			if(ex instanceof AxiosError && ex.response?.status === 401){
				return AuthenticationStatus.none;
			}
			throw ex;
		}
	}

}