import { Injectable } from '@angular/core';
import { Item } from '../_model/Item';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export abstract class AbstractItemService {

  	constructor() { }
	abstract getItems(): Promise<Item[]>;
	abstract removeItem(item: Item): Promise<Object>;
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
	
	removeItem(item: Item): Promise<Object> {

		var me = this;
		return new Promise((resolve) => {

			me.items = me.items.filter(obj => obj !== item);
			resolve();
		});
	};
}

export class HttpItemService extends AbstractItemService {

	items: Item[];
	url: string = "http://localhost:3000";

	constructor(private http: HttpClient){
		super();
	}

	getItems(): Promise<Item[]> {
		return new Promise((resolve) => {

			this.http.get<Item[]>(this.url + '/todos').subscribe(response => {

			  	var items = response.map((item) => new Item(item.name, item.id));
			  	resolve(items);
			});
		});
	};

	removeItem(item: Item): Promise<Object> {

		return this.http.delete(this.url + '/todos/' + item.id).toPromise();
	};
}
