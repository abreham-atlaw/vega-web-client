export default class User{

	phoneNumber: string;
	fullName: string;
	
	constructor(phoneNumber: string, fullName: string){
		this.fullName = fullName;
		this.phoneNumber = phoneNumber;
	}

}