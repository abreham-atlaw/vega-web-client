export default interface Model<P>{

	getPK(): P | null;
	setPK(pk: P): void;

}