import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OtmmAuth } from '../services/otmm-auth.service';
import { HeaderNavbarComponent } from '../header-navbar/header-navbar.component';
import { UserService } from '../services/user.service';
import { AppUser } from '../models/app-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userState;
  loginstatus: boolean=true;
  constructor(private router: Router,private route: ActivatedRoute,private auth: OtmmAuth,private userService: UserService) //ActivatedRoute, Router
  { }
  
  headerNavbar: HeaderNavbarComponent;
 
  login(userCredentials){   
    
    this.auth.loginUser(userCredentials).subscribe(resultUserSession=> //subscribe observable
      {     
            
        this.userState=resultUserSession;
        this.loginstatus=true;   
         
        let returnUrl=this.route.snapshot.queryParamMap.get('returnUrl'); //getting queryparam using route snapshot with queryParamMap
        
        this.router.navigate([returnUrl || '/']);    //navigating using router
        return true; 
      },
      error=>{          
        console.log("EE:",error);
      });

    
    this.loginstatus=false; // we set this to toggle validation error message
    
    return false;
                 
  }

  get userEmail(){ //getter
    return this.route.snapshot.queryParamMap.get('email'); //getting queryparam using route snapshot with queryParamMap
  }  
  get userName(){ //getter
    return this.route.snapshot.queryParamMap.get('name'); //getting queryparam using route snapshot with queryParamMap
  }
  
}
