import Request from "@/common/network/Request"
import type User from "../models/user";
import UserSerializer from "../serializers/userSerializer";
import type { AxiosRequestConfig } from "axios";


export class LoginRequest extends Request<string>{

	constructor(username: string, password: string){
		super({
			url: "/auth/login/",
			data: {
				username: username,
				password: password
			},
			method: "POST"
		})
	}

	deserializeResponse(response: any): string {
		return response.token;
	}

}


export class SignupRequest extends Request<User>{

	private serializer = new UserSerializer();

	constructor(
		username: String,
		fullName: String,
		password: String
	){
		super({
			url: "/auth/signup/",
			method: "POST",
			data: {
				"username": username,
				"full_name": fullName,
				"password": password
			}
		});
	}

	deserializeResponse(response: any): User {
		return this.serializer.deserialize(
			response
		);
	}

}



export class WhoAmIRequest extends Request<User>{

	private serializer = new UserSerializer()


	constructor(){
		super({
			url: "/auth/me/",
			method: "GET"
		})
	}

	deserializeResponse(response: any): User {
		return this.serializer.deserialize(response);
	}

	

}


export class DeleteAccountRequest extends Request<void>{

	constructor(){
		super({
			url: "/auth/delete/",
			method: "DELETE"
		})
	}

	deserializeResponse(response: any): void {
		return;
	}
}


export class UserExistsRequest extends Request<Boolean>{

	constructor(username: string){
		super({
			url: "/auth/user-exists/",
			method: "GET",
			params: {
				email: username
			}
		})
	}

	deserializeResponse(response: any) {
		return response.exists;
	}

}