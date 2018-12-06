import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import { Observable } from '../../../node_modules/rxjs';

export class PasswordValidators{

    static confirmPassword(control: AbstractControl) : ValidationErrors | null{        //static validator  function                  
                          
      
        if(control.get('cpassword').dirty && control.get('cpassword').value!="" && control.get('password').value!="")          
          if(!(control.get('cpassword').value===control.get('password').value))                     
            return {'confirmPassword': true};                              //validation fails
                            
                         
          return null; //validation success
    
      }
    }
   