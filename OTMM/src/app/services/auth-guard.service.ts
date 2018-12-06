import { Injectable } from '@angular/core';
import { OtmmAuth } from './otmm-auth.service';
import { Router, RouterStateSnapshot } from '../../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard { //for protecting the manage money page

  constructor(private router: Router, private otmmAuth: OtmmAuth) { }

  canActivate(route,state: RouterStateSnapshot){ 
    if(this.otmmAuth.isLoggedIn()) return true; // checks if the user is logged in or not, if loggedin the protected page shall be displayed immediately
    
    this.router.navigate(['/login'],{queryParams: { returnUrl: state.url }}); //if user is accessing a protected page without login, it shall be routed to login page by passing the protected page as query param; we can get the protected page url by using RouterStateSnapshot
    return false; //we are not displaying the manage money page right now, first routing to login page as we have returned that user is not loggedin
  }
}
