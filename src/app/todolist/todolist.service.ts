import { Injectable } from '@angular/core';
import { Item } from '../../model/Item';


@Injectable({
  providedIn: 'root'
})

export abstract class AbstractItemService {

  	constructor() { }
	abstract getItems(): Promise<Item[]>;
	abstract removeItem(item: Item): Promise<void>;
}

export class MockItemService extends AbstractItemService {

	items: Item[];

	constructor(){
		super();
		this.loadItems();
	}

	loadItems(): void {
		this.items = [
			new Item("Buy pendrives"),
			new Item("But backpacks"),
			new Item("Rent the projectors")
		];
	};

	getItems(): Promise<Item[]> {
		return new Promise((resolve) => {

			resolve(this.items);
		});
	};
	
	removeItem(item: Item): Promise<void> {

		var me = this;
		return new Promise((resolve) => {

			me.items = me.items.filter(obj => obj !== item);
			resolve();
		});
	};
}
