import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2'; //Sri: imported basic module to work angular with firebase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { FooterNavbarComponent } from './footer-navbar/footer-navbar.component';
import { HomeComponent } from './home/home.component';
import { TrackMoneyMainComponent } from './track-money-main/track-money-main.component';
import { OtmmAuth } from './otmm-auth.service';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountCategoryComponent } from './account-category/account-category.component';
import { AccountsComponent } from './accounts/accounts.component';


@NgModule({
  declarations: [
    AppComponent,
    AccountCategoryComponent,
    AccountsComponent,
    HeaderNavbarComponent,
    FooterNavbarComponent,
    HomeComponent,
    TrackMoneyMainComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),  //Sri: initializing our application with the firebase configuration (which we provided in environment.ts which we actually copied from our project setup in firebase)    
    AngularFireDatabaseModule,
    AngularFontAwesomeModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'',component: HomeComponent },
      {path:'login',component: LoginComponent},
      {path:'register',component: RegisterComponent},
      {path:'user/manage-money',component: TrackMoneyMainComponent}
    ]),
  ],
  providers: [
    OtmmAuth,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
