import { Component, OnInit } from '@angular/core';
import { currency } from '../currency.model';

@Component({
  selector: 'currency-form',
  templateUrl: './currency-form.component.html',
  styleUrls: ['./currency-form.component.css']
})
export class CurrencyFormComponent implements OnInit {

  model = new currency(1,0);

  constructor() { }

  ngOnInit(): void {
  }
  get currentCurr(){
    return JSON.stringify(this.model);
  }


}
