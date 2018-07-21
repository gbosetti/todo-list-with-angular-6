import { Component, OnInit } from '@angular/core';
import { Item } from '../../model/Item';
import { TodolistService } from './todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

	items : Item[];
	constructor() { 

		this.items = (new TodolistService()).getItems();
	}

  	ngOnInit() {}

  	onRemove(item){

		this.items = this.items.filter(obj => obj !== item);
	}

	onEdit(item){
		console.log("To do ;)");
	}
}
