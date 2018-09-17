import { Component, OnInit } from '@angular/core';
import { Item } from '../_model/Item';
import { ApiService } from '../_services/api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  	editItemForm : FormGroup;

	constructor(private service: ApiService, private router: Router, private formBuilder: FormBuilder) { /*private service: HttpItemService*/

		this.editItemForm = formBuilder.group(this.service.getCurrentItem());
	}

	ngOnInit() {
	}

	onSubmit(): void {

	    // Do useful stuff with the gathered data
		this.updateItem(this.editItemForm.value);
	} 

	updateItem(item: Item) {
		this.service.updateItem(item)
			.then(() => { this.router.navigateByUrl('/items')})
			.catch(err => console.log(err));
	}

}
