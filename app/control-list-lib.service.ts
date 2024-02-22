import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlListLibService {

  constructor() { }

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

  checklibros()
  {
    return this.libros;
  }

  actualizarlibros(id: number)
  {
    this.libros = this.libros.filter(libro => libro.id !== id);
    alert("borrado libro de id: " + id)
  }
}

