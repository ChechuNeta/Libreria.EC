import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlListLibService } from '../control-list-lib.service';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `./libros.component.html`,
  styleUrls: ['./libros.component.css'],
})
export class LibrosComponent {

  libros = this.mostrarLibros();

  trackById(index: number, item: any): number {
    return item.id;
  }

  constructor(private listLib:ControlListLibService){}

  mostrarLibros(){
    const libros = this.listLib.checklibros()

    return libros;
  }

}
