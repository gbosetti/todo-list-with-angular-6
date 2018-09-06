import { Component, OnInit } from '@angular/core';
import { Item } from '../_model/Item';
import { AbstractItemService, MockItemService, HttpItemService } from '../_services/todolist.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

	items : Item[];
	service : AbstractItemService;

	constructor(private http: HttpClient, private router: Router) { /*private service: HttpItemService*/

		this.service = new HttpItemService(http); //MockItemService();
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
		this.router.navigateByUrl("/edit-item");
	}
}
