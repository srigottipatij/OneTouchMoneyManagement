import { Injectable} from '@angular/core';
import { AppUser } from '../models/app-user';
import { DatePipe } from '@angular/common';
import { SpecialCharsEliminatorPipe } from '../pipes/special-chars-eliminator.pipe';

import { HttpClient, HttpParams } from '@angular/common/http';
import { map, filter } from '../../../node_modules/rxjs/operators';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService{
  private url="https://otmm-bd3b7.firebaseio.com/users";  
  constructor(private http: HttpClient,private datePipe: DatePipe,
              private specialCharsEliminatorPipe: SpecialCharsEliminatorPipe) { //used HttpClient
  }
  

  getUserByEmail(email){
        
    return this.http.get(this.url+'/'+this.specialCharsEliminatorPipe.transform(email)+'.json');        //http.get; used userdefined pipe
  }

  getUserByCredentials(email,password): Observable<AppUser>{

    let user: AppUser;                                                                                 
    return this.http.get(this.url+'/'+this.specialCharsEliminatorPipe.transform(email)+'.json') //http get, userdefined pipe
    .pipe(filter(result=>(!!result))).pipe(map(userData=> //filter to check result is not null, !!result returns true if result is not null; used map
      {        
        user=new AppUser(userData);
        return user;       
      }));          
  }


  createUser(user: AppUser){        
       console.log(user.Password);
          let currentDate=new Date();
          let userdetails={ //object creation while initializing it
            name: user.name,
            email: user.email,
            password: user.Password,
            jdate: this.datePipe.transform(currentDate, 'dd-MM-yyyy'),//used inbuilt datepipe to transform date in to the format that we need
            userImage: "--",
            isActive: false,
            login_timestamp: null,
            last_login_session_time: null        
          }
          return this.http.put(this.url+'/'+this.specialCharsEliminatorPipe.transform(user.email)+'.json', 
          userdetails);                           //used http.put, to created userdefined key, and store data with that key
        }               

        
  updateUserSession(user){                  
    let currentDate=new Date();
    let userdetails={    //object creation and initialization
            isActive: true,
            login_timestamp: this.datePipe.transform(currentDate, 'dd-MM-yyyy'), //used inbuilt datepipe to transform date in to the format that we need
            last_login_session_time: null        
    }
    return this.http.patch(this.url+'/'+this.specialCharsEliminatorPipe.transform(user.email)+'.json',
    userdetails);                           // used http.patch to update only few columns or elements in the database user object.
  }               
}




