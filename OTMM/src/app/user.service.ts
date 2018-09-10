import { Injectable } from '@angular/core';
import { AppUser } from './models/app-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: AppUser[];
  constructor() {
    this.users=this.getAllUsers();
   }
  saveUser(user){    
    return true;
  }
 getUser(email,password){
  return this.users.filter(u=> (u.email.toLowerCase()==email.toLowerCase()&&u.password==password));
  
 }
 
 getUserByEmail(email)
 {      
   return this.users.filter(u=> u.email.toLowerCase()==email.toLowerCase())
 }

  getAllUsers(){
   this.users=[{name: "azeema", email: "azeemohammadb@gmail.com",password:"azeemab"},{name: "param", email: "parammahankalim@gmail.com",password:"paramm"},{name: "suguna", email: "srigottipatij@gmail.com",password:"sugunaj"}];   
   return this.users;
  }
}
