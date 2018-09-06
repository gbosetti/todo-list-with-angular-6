import { Injectable } from '@angular/core';
import { Item } from '../../_model/Item';
import { AbstractItemsService } from './abstract-items.service';

@Injectable({
  providedIn: 'root'
})
export class MockItemsService extends AbstractItemsService {

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
	
	removeItem(item: Item): Promise<Object> {

		var me = this;
		return new Promise((resolve) => {

			me.items = me.items.filter(obj => obj !== item);
			resolve();
		});
	};

	addItem(item: Item): Promise<Object> {
		return new Promise((resolve) => {

			this.items.push(item);
			resolve();
		});
	};

	updateItem(item: Item): Promise<Object> {
		return new Promise((resolve) => {

			this.items.some(storedItem => {
				if (storedItem.id == item.id){
				
					storedItem.name = item.name;
					return true;
				}
			});
			resolve();
		});
	};
}