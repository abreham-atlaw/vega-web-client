import CoreProviders from "@/dependency_injection/coreProviders";
import type NetworkClient from "@/common/network/NetworkClient";
import { DeleteAccountRequest, LoginRequest, SignupRequest, UserExistsRequest, WhoAmIRequest } from "../requests/authRequests";
import AuthenticationStatus from "../models/authenticationStatus";
import type AuthenticatedNetworkClient from "@/common/network/AuthenticatedNetworkClient";
import type TokenStorage from "@/common/utils/tokenStorage";
import type User from "../models/user";
import { AxiosError } from "axios";



export default class AuthRepository{

	networkClient: NetworkClient = CoreProviders.provideNetworkClient();
	authenticatedNetworkClient: Promise<AuthenticatedNetworkClient> = CoreProviders.provideAuthenticatedNetworkClient();
	tokenStorage: TokenStorage = CoreProviders.provideTokenStorage();
	
	async login(username: string, password: string): Promise<void>{
		const token = await this.networkClient.execute(new LoginRequest(username, password));
		await this.tokenStorage.store(token);
	}

	async signup(username: string, fullName: string, password: string): Promise<User>{
		const user = await this.networkClient.execute(new SignupRequest(username, fullName, password));
		await this.login(username, password);
		return user;
	}

	async me(): Promise<User>{
		return await (await this.authenticatedNetworkClient).execute(new WhoAmIRequest());
	}

	async userExists(username: string): Promise<Boolean>{
		return await this.networkClient.execute(new UserExistsRequest(username));
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