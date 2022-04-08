import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dc.interface';
import { DcService } from '../services/dc.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {


  constructor( private dcService: DcService){
   // this.personajes = this.dcService.personajes;
  }
  //personajes: Personaje[] =[]

/*   get personajes(): Personaje[]{
    return this.dcService.personajes;
  } */

  nuevo: Personaje ={
    nombre:'Gatubela',
    poder: 1520
  }
  /* agregar( event: any ){
    event.preventDefault()
    console.log("hey on objet", event);
  } */
  
  /* agregarNuevoPersionaje( argumentoHijo: Personaje){

    console.log("llamanos desde el hijo", argumentoHijo);
    this.personajes.push(argumentoHijo)
  } */

  cambiarNombre( event:any ){
    console.log(event.target.value);
  }


}
