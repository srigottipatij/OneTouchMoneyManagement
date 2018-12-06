import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[lowercaseInputFormat]'  
})
export class LowercaseInputFormatDirective {

  constructor(private el:ElementRef){} //Used ElementRef
  @HostListener('blur') onblur(){   
    let value: string=this.el.nativeElement.value; //got nativeElement value on ElementRef, i.e. got the value of an input field
    this.el.nativeElement.value=value.toLowerCase(); //assigned/modified value to the input field
  }
  
}
