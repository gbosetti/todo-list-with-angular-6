import { Component, OnInit } from '@angular/core';
import { Item } from '../_model/Item';
import { ApiService } from '../_services/api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  	newItemForm : FormGroup;

	constructor(private service: ApiService, private router: Router, private builder: FormBuilder) { /*private service: HttpItemService*/

		this.newItemForm = builder.group(new Item("")); 
	}

	ngOnInit() {
	}

	onSubmit(): void {
		this.addItem(this.newItemForm.value);
	} 

	addItem(item: Item) {
		this.service.addItem(item)
			.then(() => {console.log("routing");this.router.navigateByUrl('/items')})
			.catch(err => console.log(err));
	}

}
