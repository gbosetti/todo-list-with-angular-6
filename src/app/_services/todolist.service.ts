import { Injectable } from '@angular/core';
import { Item } from '../_model/Item';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService{

	strategy: AbstractItemService;
	currentItem: Item;

	constructor(private http: HttpClient) { 
		this.strategy = new HttpItemService(http); //MockedService
	}
	getItems(): Promise<Item[]> {
		return this.strategy.getItems();
	};
	removeItem(item: Item): Promise<Object> {
		return this.strategy.removeItem(item);
	};
	addItem(item: Item): Promise<Object>{
		return this.strategy.addItem(item);
	};
	updateItem(item: Item): Promise<Object>{
		return this.strategy.updateItem(item);
	};
	getCurrentItem(): Item {
		return this.currentItem;
	};
	setCurrentItem(item: Item) {
		this.currentItem = item;
	};
}

export abstract class AbstractItemService {

  	constructor() { }
	abstract getItems(): Promise<Item[]>;
	abstract removeItem(item: Item): Promise<Object>;
	abstract addItem(item: Item): Promise<Object>;
	abstract updateItem(item: Item): Promise<Object>;
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

	addItem(item: Item): Promise<Object> {

		return this.http.post(this.url + '/todos', item).toPromise();
	};

	updateItem(item: Item): Promise<Object> {
		return this.http.put(this.url + '/todos/' + item.id, item).toPromise();
	}
}
