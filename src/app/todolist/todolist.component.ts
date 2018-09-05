import { Component, OnInit } from '@angular/core';
import { Item } from '../_model/Item';
import { AbstractItemService, MockItemService } from '../_services/todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

	items : Item[];
	service : AbstractItemService;

	constructor() { 

		this.service = new MockItemService();
		this.updateLocalItems();
	}

	updateLocalItems(){
		this.service.getItems().then(items => this.items = items);
	}

  	ngOnInit() {}

  	onRemove(item){

		this.service.removeItem(item).then(() => this.updateLocalItems());
	}

	onEdit(item){
		console.log("To do ;)");
	}
}
