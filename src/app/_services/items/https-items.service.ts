import { Injectable } from '@angular/core';
import { HttpItemsService } from './http-items.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../../_model/Item';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpsItemsService extends HttpItemsService{

	constructor(http: HttpClient, private auth: AuthService){
		super(http);
	}

	getHeadersWith(token){

		return {
			headers: new HttpHeaders({
				'Content-Type':  'application/json',
				'Authorization': token
			})
		};
	}

	getCurrentToken(){

		return this.auth.getCurrentSession().getToken();
	}

	getItems(): Promise<Item[]> {
		return new Promise((resolve) => {

			this.http.get<Item[]>(this.url, this.getHeadersWith(this.getCurrentToken())).subscribe(response => {

			  	var items = response.map((item) => new Item(item.name, item.id));
			  	resolve(items);
			});
		});
	};

	removeItem(item: Item): Promise<Object> {

		return this.http.delete(this.url + '/' + item.id, this.getHeadersWith(this.getCurrentToken())).toPromise();
	};

	addItem(item: Item): Promise<Object> {

		return this.http.post(this.url, item, this.getHeadersWith(this.getCurrentToken())).toPromise();
	};

	updateItem(item: Item): Promise<Object> {
		return this.http.put(this.url + '/' + item.id, item, this.getHeadersWith(this.getCurrentToken())).toPromise();
	}
}
