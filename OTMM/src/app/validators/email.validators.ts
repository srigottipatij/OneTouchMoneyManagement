import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import { UserService } from '../services/user.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { InjectorInstance } from '../app.module';
import { Observable } from '../../../node_modules/rxjs';
import { AppUser } from '../models/app-user';
import {map} from 'rxjs/operators';


export class EmailValidators {
    static uniqueUser(emailControl: AbstractControl) : Observable<ValidationErrors>{ //asynchronous validator
      const userService =  InjectorInstance.get(UserService); //InjectorInstance is the one which we have injected in app.module.ts constructor, this gets the UserService object
  
      if(!emailControl.errors && emailControl.updateOn){  //code to assign updateOn value with an event will be in controller or html, and if same event is raised then updateOn returns true
        return userService.getUserByEmail(emailControl.value).
        pipe(
        map(userDetails=> //map
          {        
            if(userDetails)                        
            return {'uniqueUser':true}; //uniqueuser validation failed                                    
            
            
            return null; //unique user validation success                  
          }));
        }
    }
  
}

