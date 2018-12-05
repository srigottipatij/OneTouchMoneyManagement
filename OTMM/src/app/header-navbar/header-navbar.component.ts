import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { UserService } from '../services/user.service';
import { OtmmAuth } from '../services/otmm-auth.service';

@Component({
  selector: 'header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.css']
})
export class HeaderNavbarComponent{  
  constructor(private otmmAuth: OtmmAuth){ //I used otmmAuth in header-navbar.component.ts, thats why I have injected it   
  }

}
