import { Component } from '@angular/core';
import { Money } from '../models/money';

@Component({
  selector: 'currency-form',
  templateUrl: './currency-form.component.html',
  styleUrls: ['./currency-form.component.css']
})

export class CurrencyFormComponent {

  moneyArray: Money[]= [
    {id:1, value:100, arg:8215, spn:83, ger:83 }
  
  ];
  selectedMoney: Money = new Money();

  addOrEdit(){
    this.selectedMoney.id = this.moneyArray.length + 1;
    this.selectedMoney.arg = Math.round(this.selectedMoney.value * 82.15);
    this.selectedMoney.spn = Math.round(this.selectedMoney.value * 0.83);


    this.selectedMoney.ger = Math.round(this.selectedMoney.value * 0.83);
 

    this.moneyArray.push(this.selectedMoney)
    

    this.selectedMoney = new Money();

  }

  constructor() { }

 



}
