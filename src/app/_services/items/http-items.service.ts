import { Injectable } from '@angular/core';
import { Item } from '../../_model/Item';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { AbstractItemsService } from './abstract-items.service';

@Injectable({
  providedIn: 'root'
})

export class HttpItemsService extends AbstractItemsService {

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