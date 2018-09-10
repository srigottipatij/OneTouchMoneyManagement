import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  catgry: string;
  accnt: string;
  amnt: number;
  mem: string;
  constructor() { }

  ngOnInit() {
  }

  categories=["Select...","Credit card","Bank","Bank charges","Other"];
  selectChangeHndlr(e)
  {
    this.catgry=e.target.value;
  }
  accountsSave()
  {
    console.log(this.catgry);
    console.log(this.accnt);
    console.log(this.amnt);
    console.log(this.mem);
  }
  
}
