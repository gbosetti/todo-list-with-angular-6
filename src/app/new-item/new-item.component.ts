import { Component, OnInit } from '@angular/core';
import { Item } from '../_model/Item';
import { AbstractItemService, MockItemService, HttpItemService } from '../_services/todolist.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  	service : AbstractItemService;
  	newItemForm : FormGroup;

	constructor(private http: HttpClient, private router: Router) { /*private service: HttpItemService*/

		this.service = new HttpItemService(http); //MockItemService();
		this.newItemForm = new FormGroup({
			itemName: new FormControl()
		}); 
	}

	ngOnInit() {
	}

	onSubmit(): void {
		//console.log('Name:' + this.newItemForm.get('itemName').value);
		this.addItem(new Item(this.newItemForm.get('itemName').value));
	} 

	addItem(item: Item) {
		this.service.addItem(item)
			.then(() => {console.log("routing");this.router.navigateByUrl('/home')})
			.catch(err => console.log(err));
	}

}
