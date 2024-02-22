import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrosComponent } from '../libros/libros.component';
import { ControlListLibService } from '../control-list-lib.service';

@Component({
  selector: 'app-interf-admin',
  standalone: true,
  imports: [LibrosComponent],
  templateUrl: './interf-admin.component.html',
  styleUrl: './interf-admin.component.css'
})
export class InterfAdminComponent
{

  @Input() Adminname= "";

  Logged = false

  EntrarAdmin()
  {

    var contraseña = document.getElementById("password") as HTMLInputElement;

    const lacontraseña = contraseña.value;

    if(lacontraseña == "admin")
    {
      this.Logged = true;
    }
    else
    {
      alert("Password incorrecta");
    }
  }


  constructor(private listLib:ControlListLibService){}

  unidunico =this.listLib.libros.length + 1;

  addBook()
  {

    var nombrelibro = document.getElementById("nombrelibro") as HTMLInputElement;
    const nombre = nombrelibro.value;


    var autorlibro = document.getElementById("autor") as HTMLInputElement;
    const autor = autorlibro.value;


    var categorialibro = document.getElementById("categoria") as HTMLInputElement;
    const categoria = categorialibro.value;


    var aniolibro = document.getElementById("anio_publicacion") as HTMLInputElement;
    const anio = parseInt(aniolibro.value);

    // var imagenlibro = document.getElementById("imagen") as HTMLInputElement;
    // const imagen = "./assets/"+imagenlibro.files[0].name;
     

   
 
    const nuevolibro = {
      id: this.unidunico, // Asignar un nuevo ID único
      titulo: nombre,
      autor: autor,
      categoria: categoria,
      anioPublicacion: anio, // Convertir a número
      png:"./assets/libroPaula.jpg"
      // png: (imagen) // Reemplazar con la URL correcta de la imagen
    };
    this.unidunico++;

    // Obtener la lista actual de libros
    const listaLibros = this.listLib.checklibros();

    // Agregar el nuevo libro al array
    listaLibros.push(nuevolibro);

    // Actualizar la lista de libros en el servicio
    this.listLib.libros = listaLibros;

    // Puedes imprimir la lista actualizada en la consola
    console.log(this.listLib.checklibros());

  }

  loslibros = this.listLib.checklibros()

  deletebook()
  {
    var idlibro = document.getElementById("ellibroaborrar") as HTMLInputElement;
    const id = parseInt(idlibro.value);

    const listaLibros = this.listLib.checklibros();

    this.listLib.libros = listaLibros.filter(libro => libro.id !== id);

    this.listLib.actualizarlibros(id);

    this.loslibros = this.listLib.checklibros();

    console.log(this.listLib.checklibros());

  }


}
