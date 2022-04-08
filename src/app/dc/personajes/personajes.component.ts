import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dc.interface';
import { DcService } from '../services/dc.service';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  /* @Input('dataPersonajes')
  personajes:Personaje []=[] */
  get personajes(){
    return this.dcService.personajes;
  }

  constructor( private dcService: DcService){
    
  }
}
