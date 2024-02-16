import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `./libros.component.html`,
  styles: ``,
})
export class LibrosComponent {
  libros = [
    { id: 1, titulo: "Paula" },
    { id: 2, titulo: "La sombra del viento" },
    { id: 3, titulo: "Marina" },
    { id: 4, titulo: "El problema final" },
    { id: 5, titulo: "El código DaVinci" },
  ];

  trackById(index: number, item: any): number {
    return item.id;
  }
}
