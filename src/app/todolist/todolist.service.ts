import { Injectable } from '@angular/core';
import { Item } from '../../model/Item';


@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  	constructor() { }

	getItems(): Item[] {
		return [
			new Item("Buy pendrives"),
			new Item("Print tshirts"),
			new Item("But backpacks"),
			new Item("Rent the projectors")
		];
	}
}
