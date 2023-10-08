import { sleep } from "../utils/time";

export default class Field<T>{

	public value :T | null = null;
	public error : string | null = null;
	public required: boolean;
	public validator: Function | null;
	public liveValidate: boolean;

	constructor(required: boolean = true, validator: Function|null = null, liveValidate: boolean = true, validationGap: number = 2000){
		this.required = required;
		this.validator = validator;
		this.liveValidate = liveValidate;
	}

	public async isValid(): Promise<boolean>{
		this.error = await this.validate();
		if(this.error === null){
			return true;
		}
		return false
	}

	public async validate(): Promise<string | null>{
		if(this.required && this.getValue() === null){
			return "This field is required";
		}
		if(this.validator != null){
			return this.validator(this.getValue())
		}
		return null;
	}

	public getValue(): T | null{
		return this.value;
	}

	public async setValue(value: T|null){
		this.value = value;
		if(this.liveValidate){
			await this.isValid()
		}
	}

}

export class TextField extends Field<string>{

	private emptyAsNull: boolean;
	constructor(
		required: boolean = true, 
		validator: Function|null = null, 
		liveValidate: boolean = true,
		emptyAsNull: boolean = true
	){
		super(required, validator, liveValidate)
		this.emptyAsNull = emptyAsNull
	}

	public getValue(): string | null {
		const value = super.getValue()
		if(this.emptyAsNull && value === ""){
			return null;
		}
		return value;
	}

}


export class ListField<T> extends Field<(T | null)[]>{


	private generator: Function;
	private fields: Field<T>[] = [];

	constructor(generator?: Function, required?: boolean, validator?: Function, liveValidate?: boolean){
		super(required, validator, liveValidate)
		this.generator = generator ?? (() => {return new Field<T>()})
	}

	public add(): Field<T>{
		let field = this.generator();
		this.fields.push(field);
		return field;
	}

	public pop(i?: number): Field<T>{
		if(i === undefined){
			i = this.fields.length - 1;
		}
		let field = this.fields[i];
		this.fields.splice(i, 1)
		return field
	} 

	public getValue(): (T | null)[] | null {
		return this.fields.map((field: Field<T>) => {return field.getValue()})
	}

	public async setValue(values: (T | null)[] | null): Promise<void> {
		this.fields = []
		if(values === null){
			return;
		}
		for(let value of values){
			let field: Field<T> = this.add();
			field.setValue(value)
		}	
	}

	public getFields(): Field<T>[]{
		return this.fields;
	}

	public async validate(): Promise<string | null> {
		
		let validationError: string | null = null;
		for(let i=0; i<this.getFields().length; i++){
			let field = this.getFields()[i];
			if(await field.isValid()){
				continue;
			}
			if(validationError === null){
				validationError = "";
			}
			validationError = `${validationError}\n${i}. ${field.error}`
		}
		return validationError;

	}

}


// export class PrimaryKeyField<T> extends Field<T>{

// 	private repository: Repository<T, Model<T>>;

// 	constructor(repository: Repository<T, Model<T>>, required?:boolean, validator?: Function, liveValidate?: boolean){
// 		super(required, validator, liveValidate)
// 		this.repository = repository
// 	}

// 	protected async validate(): Promise<string | null> {
// 		let error = await super.validate()
// 		if(error != null){
// 			return error
// 		}
// 		if(this.getValue() === null && !this.required){
// 			return null
// 		}
// 		try{
// 			await this.repository.getByPrimaryKey(this.getValue()!)
// 			return null
// 		}
// 		catch(ex: any){
// 			if(ex instanceof InstanceNotFoundException){
// 				return "Not Found"
// 			}
// 			throw ex;
// 		}
		
// 	}

// }