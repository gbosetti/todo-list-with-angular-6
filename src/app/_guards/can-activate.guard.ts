import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {

	constructor(private auth: AuthService, private router: Router){}
	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

		if (!this.auth.isLoggedIn()) {
			this.router.navigate(['/login']);
			return false;
		}
		return true;

		//return this.auth.isLoggedIn()
	}
}