import { Component, OnInit } from '@angular/core';
import { Item } from '../_model/Item';
import { ApiService } from '../_services/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

	items : Item[];
	static instance: TodolistComponent;

	constructor(private service: ApiService, private router: Router) { /*private service: HttpItemService*/

		this.updateLocalItems();
	}

	updateLocalItems(){
		console.log("Updating items");
		this.service.getItems().then(items => this.items = items);
	}

  	ngOnInit() {}

  	onRemove(item){

		this.service.removeItem(item).then(() => this.updateLocalItems());
	}

	onEdit(item){
		this.service.setCurrentItem(item);
		this.router.navigateByUrl("/edit-item");
	}
}
