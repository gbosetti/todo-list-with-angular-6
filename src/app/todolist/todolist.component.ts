import { Component, OnInit } from '@angular/core';
import { Item } from '../_model/Item';
import { AbstractItemService, MockItemService, HttpItemService } from '../_services/todolist.service';
import {Http, HttpModule } from '@angular/http';
import {map} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

	items : Item[];
	service : AbstractItemService;

	constructor(private http: HttpClient) { /*private service: HttpItemService*/

		this.service = new HttpItemService(http); //MockItemService();
		this.updateLocalItems();
	}

	updateLocalItems(){
		console.log(this.service);
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
