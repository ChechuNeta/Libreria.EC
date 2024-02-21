import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrosComponent } from '../libros/libros.component';

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

  addBook()
  {

    var nombrelibro = document.getElementById("nombrelibro") as HTMLInputElement;
    const nombre = nombrelibro.value;


    var autorlibro = document.getElementById("autor") as HTMLInputElement;
    const autor = autorlibro.value;


    var categorialibro = document.getElementById("categoria") as HTMLInputElement;
    const categoria = categorialibro.value;


    var aniolibro = document.getElementById("anio_publicacion") as HTMLInputElement;
    const anio = aniolibro.value;
  
  }

}
