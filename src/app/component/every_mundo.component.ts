import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'every_mundo',
    templateUrl: 'every_mundo.component.html'

})


export class Everymundo implements OnInit{
    entrada: number = 0;

    onTextboxInput(event:any){
        this.entrada = event.target.value;


    }

  
    constructor(){
 
    }
    ngOnInit(): void{
    }




}