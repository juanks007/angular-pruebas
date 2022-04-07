import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>holas</h1>
        <h2>{{ title }}</h2>
        <h3> La base es: <strong>{{base}}</strong></h3>

        <button (click)="acumular(base)"> {{ +base}} </button>

        <span> {{ numero }} </span>

        <!-- <button (click)="numero = numero -1"> -1 </button> -->
        <button (click)="acumular(-base)"> - {{base}} </button>
    `
})
export class ContadorComponent{
    title: string = 'bases contador app';
    numero: number = 10;
  
    base: number = 5;
  
    sumar(){
      this.numero += 1;
    }
  
    acumular(valor: number){
        this.numero += valor;
    }
}