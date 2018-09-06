import { Component, OnInit } from '@angular/core';
import { Item } from '../_model/Item';
import { AbstractItemService, MockItemService, HttpItemService } from '../_services/todolist.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  	service : AbstractItemService;
  	editItemForm : FormGroup;

	constructor(private http: HttpClient, private router: Router, private formBuilder: FormBuilder) { /*private service: HttpItemService*/

		this.service = new HttpItemService(http); //MockItemService();
		this.editItemForm = formBuilder.group(new Item("", 1));
		/*	Ejemplo de otro tipo de estructura:
			new FormGroup({
				id: new FormControl(),
				name: new FormControl()
			});
		*/
	}

	ngOnInit() {
	}

	onSubmit(): void {

		//const result: Item = Object.assign({}, this.editItemForm.value);
    	//result.name = Object.assign({}, result.name);

	    // Do useful stuff with the gathered data
	    console.log(this.editItemForm.value);

		//this.updateItem(new Item(this.newItemForm.get('itemName').value,this.newItemForm.get('itemId').value));
	} 

	updateItem(item: Item) {
		this.service.updateItem(item)
			.then(() => {console.log("routing");this.router.navigateByUrl('/home')})
			.catch(err => console.log(err));
	}

}
