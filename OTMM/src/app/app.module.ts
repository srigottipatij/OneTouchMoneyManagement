import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { AngularFireModule } from 'angularfire2'; //Sri: imported basic module to work angular with firebase
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { FooterNavbarComponent } from './footer-navbar/footer-navbar.component';
import { HomeComponent } from './home/home.component';
import { TrackMoneyMainComponent } from './track-money-main/track-money-main.component';
import { OtmmAuth } from './services/otmm-auth.service';
import { UserService } from './services/user.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountCategoryComponent } from './account-category/account-category.component';
import { AccountsComponent } from './accounts/accounts.component';
import { LowercaseInputFormatDirective } from './inputformatdirectives/lowercase-input-format.directive';
import { DatePipe } from '@angular/common';
import { SpecialCharsEliminatorPipe } from './pipes/special-chars-eliminator.pipe';
import { InvalidPageComponent } from './invalid-page/invalid-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthGuard } from './services/auth-guard.service';
import { ExpensesComponent } from './expenses/expenses.component';


export let InjectorInstance: Injector; //my code
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
    RegisterComponent,
    LowercaseInputFormatDirective,
    InvalidPageComponent,
    AboutUsComponent,
    ExpensesComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),  //Sri: initializing our application with the firebase configuration (which we provided in environment.ts which we actually copied from our project setup in firebase)    
    AngularFireDatabaseModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'',component: HomeComponent },
      {path:'about/us',component: AboutUsComponent},                        
      {path:'login',component: LoginComponent},                        
      {path:'register',component: RegisterComponent},
      //{path:'user/:id',component: TrackMoneyMainComponent},
      {path:'user/manage-money',component: TrackMoneyMainComponent,canActivate: [AuthGuard]}, //protecting routes
      {path:'user/expenses',component: ExpensesComponent,canActivate: [AuthGuard]}, //protecting routes
      {path:'accounts',component: AccountsComponent},
      {path:'account-category',component: AccountCategoryComponent},
      {path:'**',component: InvalidPageComponent }      //Invalid Page routing when other than the above urls are given
    ]),
  ],
  providers: [
    OtmmAuth,
    AuthGuard,
    UserService,
    DatePipe,
    SpecialCharsEliminatorPipe
  ],
  bootstrap: [AppComponent]
})

export class AppModule { 
  constructor(private injector: Injector) //my code for injecting an instance
  {
    InjectorInstance = this.injector;
  }
}
