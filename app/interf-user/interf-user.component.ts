import { Component, Input } from '@angular/core';
import { LibrosComponent } from '../libros/libros.component';


@Component({
  selector: 'app-interf-user',
  standalone: true,
  imports: [LibrosComponent],
  templateUrl: './interf-user.component.html',
  styleUrl: './interf-user.component.css'
})
export class InterfUserComponent 
{

  @Input() Username= "";

  Logged = false

  Entrar()
  {
    var username = document.getElementById("nombre") as HTMLInputElement;

    const nombre = username.value;

    this.Logged = true;
    alert("hola " + nombre)

  }

}
