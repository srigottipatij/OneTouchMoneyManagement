import { Injectable } from '@angular/core';
import { AppUser } from '../models/app-user';
import { UserService } from './user.service';
import { switchMap, filter } from 'rxjs/operators';


import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtmmAuth {
  constructor(private userService: UserService) {}
  userState;

  registerUser(user: AppUser){          
    return this.userService.getUserByEmail(user.email)
    .pipe(  
      switchMap(userDataResponse=> //switchMap
      {
        if(!userDataResponse){
                  
          return this.userService.createUser(user);
        }
      }));    
  }

  loginUser(user)
  {        
    return this.userService.getUserByCredentials(user.email,user.password)
    .pipe(
      filter(result=>(!!result&&user.password==result.password))) //filtering the result of observable based on condition, !!result implies, the result is not null
      .pipe(
      switchMap(resultUserData=> //switchMap
      {
        //we have to store the token that is returned from server;             
          localStorage.setItem("token","{\"name\": \""+resultUserData.name+"\"\, \"email\": \""+resultUserData.email+"\"}");  //localStorage points to application storage which exists in our browser press ctrl+shift+i, go to application=>localstorage=>localhost:4200, here we can see the values stored in our local storage
          this.userState=this.userService.updateUserSession(resultUserData);                         
          return this.userState;        
      }));    
   
  }
  logout(){ 
    //removing the current logined user details from localstorage 
    localStorage.removeItem("token");
  }
  isLoggedIn(){
    
    //getting current loggined user details which were stored in localstorage if any  
    let token=localStorage.getItem("token");    
    
    if(!token) // if no user data stored, then isLoggedIn is not true,
    return false;
        
    return true; //otherwise isLoggedIn is true.
  }
  get currentUser(){ //returning current user name;
    let token=localStorage.getItem("token");            
    
    return JSON.parse(token).name;
  }

}