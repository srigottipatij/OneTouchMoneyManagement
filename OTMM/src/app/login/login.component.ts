import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { OtmmAuth } from '../otmm-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router,private auth: OtmmAuth) { }

  login(user){
    if(this.auth.loginUser(user))
    {
      console.log("Logined");
      this.router.navigateByUrl("/user/manage-money");
     }
     else
     {
     console.log("Invalid Username/Password");
     
     }
  }

}
