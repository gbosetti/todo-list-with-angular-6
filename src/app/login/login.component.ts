import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth/auth.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	isBusy: Boolean = false;
	hasFailed: Boolean = false;
	loginForm: FormGroup;
	url: string;

	constructor(private fb: FormBuilder, private http: HttpClient, private auth: AuthService, private router: Router) {
		
		this.url = environment.backendUrl + "/Users/login";
		this.loginForm = fb.group({
		  	username: ['admin', Validators.required],
		  	password: ['nimda', Validators.required]
		});
		this.auth.logOut();
	}

	ngOnInit() {

	}

	login(){

		// Reset status
		this.hasFailed = false;

		var username = this.loginForm.get('username').value;
		var password = this.loginForm.get('password').value;

		return this.http.post(this.url, {
			"username": username,
			"password": password
		}).subscribe(response => {
			console.log(response);
            this.auth.signIn(response["id"]);
			this.router.navigate(['items']);
        },
        error => {
        	console.log(error);
			this.hasFailed = true;
        });

	};

	handleError(){
		console.log("error");
	}
}
