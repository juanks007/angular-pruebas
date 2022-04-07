import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes: string[]=['Spiderman','Ironman', 'Hulk','capitan america','thor']

  heroeBorrado: string = ''// || false || null || undefined

  

  borrarHeroe(){
    const heroePerdido = this.heroes.shift() || ''

    this.heroeBorrado = heroePerdido

    console.log(`Se borro ${heroePerdido}`);
  }

}
