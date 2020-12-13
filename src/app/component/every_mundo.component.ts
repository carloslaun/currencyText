import { Component } from '@angular/core';

@Component({
    selector: 'every_mundo',
    template: `
         <h1> hola mundo </h1>
    
    `

})

export class Everymundo{
    constructor(){
        console.log('mi componente cargado');
    }


}