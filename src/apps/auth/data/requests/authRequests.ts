import Request from "@/lib/network/Request"
import type User from "../models/user";
import UserSerializer from "../serializers/userSerializer";


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


export class WhoAmIRequest extends Request<User>{

	private serializer = new UserSerializer()


	constructor(){
		super({
			url: "/worker/me/",
			method: "GET"
		})
	}

	deserializeResponse(response: any): User {
		return this.serializer.deserialize(response.user);
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