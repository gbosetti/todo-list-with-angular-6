import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { AuthService } from '../_services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	isBusy: Boolean = false;
	hasFailed: Boolean = false;
	form: FormGroup;
	API_URL: String = "localhost...";

	constructor(private fb: FormBuilder, private http: Http, private auth: AuthService, private router: Router) {
		this.form = fb.group({
		  	username: ['', Validators.required],
		  	password: ['', Validators.required]
		});
	}

	ngOnInit() {

	}

	login(){

		// Make sure form values are valid
		//if (this.frm.invalid) {
		  //this.showInputErrors = true;
		  //return;
		//}

		// Reset status
		this.isBusy = true;
		this.hasFailed = false;

		/*const username = this.form.get('username').value;
		const password = this.form.get('password').value;

		this.signIn(username, password).subscribe((response) => {

				//response.json()
				this.auth.signIn(response.token, response.name);
				this.router.navigate(['todos']);
			},
			(error) => {
				this.isBusy = false;
				this.hasFailed = true;
			});*/
	};

	public signIn(username: string, password: string) {
		return this.http.post(this.API_URL + '/sign-in', {
			username,
			password
		});
		//.catch(this.handleError);
	}

	handleError(){
		console.log("error");
	}
}
