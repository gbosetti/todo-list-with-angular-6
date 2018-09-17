import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserSession {

  accessToken: string;
  constructor() { }

  setToken(token: string){
  	this.accessToken = token;
  }

  getToken(){
  	return this.accessToken;
  }

  public destroy(): void {
    this.accessToken = null;
  }
}

export class AuthService {

	session: UserSession;
  	constructor() { 
  		this.session = new UserSession();
  	}

	public isLoggedIn() {
		return !!this.session.getToken();
	}

	getCurrentSession(){

		return this.session;
	}

	public logOut() {
		if(this.session) this.session.destroy();
	}

	public signIn(accessToken: string) {

		return new Promise((resolve, reject) => {
			if ((!accessToken))
		  		return;

			this.session.setToken(accessToken);
			resolve();
		});
	}
}
