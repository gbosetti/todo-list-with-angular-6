import { Component, OnInit } from '@angular/core';
import { Item } from '../_model/Item';
import { AbstractItemService, MockItemService, HttpItemService } from '../_services/todolist.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

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
		this.updateItem(new Item(this.newItemForm.get('itemName').value,this.newItemForm.get('itemId').value));
	} 

	updateItem(item: Item) {
		this.service.updateItem(item)
			.then(() => {console.log("routing");this.router.navigateByUrl('/home')})
			.catch(err => console.log(err));
	}

}
