import { Injectable } from '@angular/core';
import { SessionService } from './../session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	session: SessionService;
  	constructor() { }

	public isSignedIn() {
		return !!this.session.accessToken;
	}

	public signOut() {
		this.session.destroy();
	}

	public signIn(accessToken: string, name: string) {
		if ((!accessToken) || (!name)) {
	  		return;
		}
		this.session.accessToken = accessToken;
		this.session.name = name;
	}
}
