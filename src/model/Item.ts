export class Item {

	name: String;
	creationDate: Date;

	constructor(name: String){

		this.creationDate = new Date();
		this.name = name;
	}
}