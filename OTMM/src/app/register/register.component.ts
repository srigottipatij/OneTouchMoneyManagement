import { Component, OnInit } from '@angular/core';
import { AppUser } from '../models/app-user';
import { OtmmAuth } from '../otmm-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  appUser: AppUser;
  constructor(private auth: OtmmAuth) { 

  }

  register(user){           
   if(!this.auth.registerUser(user))
     console.log("Error: user already exist!!");  
     else
     console.log("Successfully Registered user with email id:"+user.email);              
  }  

}
