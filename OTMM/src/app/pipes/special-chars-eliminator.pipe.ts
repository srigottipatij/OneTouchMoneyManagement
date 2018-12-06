import {Pipe, PipeTransform} from '@angular/core';

export class SpecialCharsEliminatorPipe implements PipeTransform{ //impelemnts PipeTransform
    transform(value: string,args?:any){ //override transform method
        if(!value)
           return null;

        return value.replace( /[^a-zA-Z0-9@]/gi , "" );  //return the transformed value, have used regular expression
    }
}