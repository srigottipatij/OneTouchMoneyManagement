import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'Angularfire2'; //Sri: imported basic module to work angular with firebase



import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),  //Sri: initializing our application with the firebase configuration (which we provided in environment.ts which we actually copied from our project setup in firebase)    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
