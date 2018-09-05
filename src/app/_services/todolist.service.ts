import { Injectable } from '@angular/core';
import { Item } from '../_model/Item';
import { HttpClient, HttpHeaders } from '@angular/common/http';


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
	
	removeItem(item: Item): Promise<void> {

		return new Promise((resolve) => {

			const httpOptions = {
			  headers: new HttpHeaders({
			    'Content-Type':  'application/json',
			    'Authorization': 'my-auth-token'
			  })
			};

			console.log("DELETE: " + this.url + '/todos/' + item.id);
			this.http.delete(this.url + '/todos/' + item.id, httpOptions);
			resolve();

			/*
				const header: HttpHeaders = new HttpHeaders()
	                .append('Content-Type', 'application/json; charset=UTF-8');
	                //.append('Authorization', 'Bearer ' + sessionStorage.getItem('accessToken'));
	            const httpOptions = {
	                headers: header,
	                body: { id: item.id }
	            };

	            this.http.delete<any>(this.url + '/todos', httpOptions);

				resolve();
			*/
		});
	};
}
