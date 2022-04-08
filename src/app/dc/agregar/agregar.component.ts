import { Component, EventEmitter, Input, Output } from '@angular/core';


import { Personaje } from '../interfaces/dc.interface';
import { DcService } from '../services/dc.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

   constructor(private dcService: DcService){

   }
 /*  @Input('dataPersonajes')
  personajes:Personaje [] = [] */
  @Input('dataNuevo')
  nuevo: Personaje ={
    nombre:'',
    poder: 0
  }

/*   @Output('dataReturn') 
  returnNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>(); */

  agregar(){
    if (this.nuevo.nombre.trim().length === 0){ return;}
    //this.personajes.push(this.nuevo)
    this.dcService.agregarPersonaje(this.nuevo)
    console.log(this.nuevo);
   // this.returnNuevoPersonaje.emit(this.nuevo)
    this.nuevo ={
      nombre :'',
      poder: 0
    }

    //console.log("nuevo ", this.personajes);

  }
}
