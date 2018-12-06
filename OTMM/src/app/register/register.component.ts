import { Component, OnInit } from '@angular/core';
import { AppUser } from '../models/app-user';
import { OtmmAuth } from '../services/otmm-auth.service';
import { UserService } from '../services/user.service';
import {FormControl,FormGroup, Validators} from '@angular/forms';
import { PasswordValidators } from '../validators/password.validators';
import { Router } from '@angular/router';
import { EmailValidators } from '../validators/email.validators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  signupform=new FormGroup({ //reactive form declaration in controller using FormGroup
    'name':new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(50)]), //form element name declaration using FormControl, binded with inbuilt validators (these are not html 5 validations, but works similarly)
    'email': new FormControl('',
    {validators: [Validators.required,Validators.minLength(8),Validators.maxLength(50),Validators.email], //form element email
      asyncValidators: [EmailValidators.uniqueUser],updateOn: 'blur' //used userdefined asynchronous validator, used updateOn blur over validations so that the validators and asynchornous validators will be updated on blur i.e. called upon blur
    }),
    passwordgroup: new FormGroup({ //creating sub form group
      'password': new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(50)]),
      'cpassword': new FormControl('',[Validators.required])},
      PasswordValidators.confirmPassword)    // sub group userdefined validator,  
  });
  constructor(private auth: OtmmAuth,private userService: UserService,private router: Router) { }

  register(user){  
    let userDetails: AppUser;
    
    userDetails=user;
        
    userDetails.Password=user.passwordgroup.password;
    
    
    this.auth.registerUser(user).subscribe(newuser=> //subscribe observable
      {        
        if(newuser){   
          let appUser=new AppUser(newuser);          
          this.router.navigate(['/login'],{queryParams:{ email: appUser.email, name: appUser.name}});     //navigation using router and also passing data through query parameters     
          return true;                
        }                            
    },
  error=>{          
    console.log("EE:",error);
  });          
     
  }  

  get email(){ //getter
    return this.signupform.get('email');
  }
  get passwordgroup(){ //getter
    return this.signupform.get('passwordgroup');
  }
  get password(){ //getter
    return this.signupform.get('passwordgroup').get('password');
  }
}
