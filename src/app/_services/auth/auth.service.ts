import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserSession {

  public accessToken: string;
  public name: string;

  constructor() { }

  getToken(){
  	return this.accessToken;
  }

  getUsername(){
  	return this.name;
  }

  public destroy(): void {
    this.accessToken = null;
    this.name = null;
  }
}

export class AuthService {

	session: UserSession;
  	constructor() { 
  		this.session = new UserSession();
  	}

	public isSignedIn() {
		return !!this.session.accessToken;
	}

	getCurrentSession(){

		return this.session;
	}

	public logOut() {
		if(this.session) this.session.destroy();
	}

	public signIn(accessToken: string, name: string) {

		return new Promise((resolve, reject) => {
			if ((!accessToken) || (!name)) {
		  		return;
			}
			this.session.accessToken = accessToken;
			this.session.name = name;
			resolve();
		});
	}
}
