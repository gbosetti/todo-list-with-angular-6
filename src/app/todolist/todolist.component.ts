import { Component, OnInit } from '@angular/core';
import { Item } from '../../model/Item';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

	items : Item[];
	constructor() { 

		this.items = [
			new Item("Buy pendrives"),
			new Item("Print tshirts"),
			new Item("But backpacks"),
			new Item("Rent the projectors")
		];
	}

  	ngOnInit() {}

  	onRemove(item){

		this.items = this.items.filter(obj => obj !== item);
	}

	onEdit(item){
		console.log("To do ;)");
	}
}
