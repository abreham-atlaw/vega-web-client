import Serializer from "@/lib/serializers/serializer";
import User from "../models/user";


export default class UserSerializer extends Serializer<User, any>{
	serialize(instance: User) {
		return {
			phone_number: instance.phoneNumber,
			full_name: instance.fullName
		};
	}
	deserialize(data: any): User {
		return new User(data.phone_number, data.full_name);
	}




}