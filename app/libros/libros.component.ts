import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `./libros.component.html`,
  styleUrls: ['./libros.component.css'],
})
export class LibrosComponent {
  libros = [
    { 
      id: 1, 
      titulo: "Paula", 
      autor: "Isabel Allende", 
      categoria: "Drama", 
      anioPublicacion: 1994 ,
      png:"./assets/libroPaula.jpg"
    },
    { 
      id: 2, 
      titulo: "La sombra del viento", 
      autor: "Carlos Ruiz Zafón", 
      categoria: "Misterio", 
      anioPublicacion: 2001,
      png:"./assets/libroPaula.jpg" 
    },
    { 
      id: 3, 
      titulo: "Marina", 
      autor: "Carlos Ruiz Zafón", 
      categoria: "Misterio", 
      anioPublicacion: 1999,
      png:"./assets/libroPaula.jpg" 
    },
    { 
      id: 4, 
      titulo: "El problema final", 
      autor: "Arturo Perez Reverte", 
      categoria: "Misterio", 
      anioPublicacion: 2023,
      png:"./assets/libroPaula.jpg"
    },
    { 
      id: 5, 
      titulo: "El código DaVinci", 
      autor: "Dan Brown", 
      categoria: "Misterio", 
      anioPublicacion: 2003,
      png:"./assets/libroPaula.jpg"
    },
  ];

  trackById(index: number, item: any): number {
    return item.id;
  }
}
