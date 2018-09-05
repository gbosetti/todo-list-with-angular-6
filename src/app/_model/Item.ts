export class Item {

	id: Number;
	name: String;
	creationDate: Date;

	constructor(name: String, id?: Number){

		this.creationDate = new Date();
		this.name = name;
		this.id = id;
	}
}