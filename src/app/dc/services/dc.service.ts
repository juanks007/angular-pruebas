import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dc.interface';

@Injectable()
export class DcService{
    constructor(){
        console.log("servicios inicializado");
    }

    private _personajes: Personaje[] =[
        {
          nombre: 'Wason',
          poder:  8000
        },
        {
          nombre: 'batman',
          poder: 5214
        }
      ]

      get personajes(): Personaje[]{
          return [...this._personajes]
      }

      agregarPersonaje(pPersonaje: Personaje){
          this._personajes.push(pPersonaje);
      }
}