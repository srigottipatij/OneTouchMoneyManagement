import { Injectable } from '@angular/core';
import { AppUser } from './models/app-user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class OtmmAuth {

  appUsers: AppUser[];
  user: AppUser;
  private isExists: boolean
  constructor(private userService: UserService) { 
   this.appUsers=userService.getAllUsers();
  }
  loginUser(user)
  {    
    return this.userService.getUser(user.email,user.password).length==1;    
  }
  registerUser(user){        
    return (this.userService.getUserByEmail(user.email).length>0)? false : this.userService.saveUser(user);
  }

}
