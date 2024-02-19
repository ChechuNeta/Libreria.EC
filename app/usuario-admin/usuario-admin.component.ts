import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterfAdminComponent } from '../interf-admin/interf-admin.component';
import { InterfUserComponent } from '../interf-user/interf-user.component';


@Component({
  selector: 'app-usuario-admin',
  standalone: true,
  imports: [InterfAdminComponent, InterfUserComponent, CommonModule],
  templateUrl: './usuario-admin.component.html',
  styleUrl: './usuario-admin.component.css'
})


export class UsuarioAdminComponent 
{
  username = "Pedro";
  Usu = false;

  adminname = "ElAdminJefazo";
  Admin = false;


  greetusu()
  {
    alert("Hola usuario!!");
  }
 
  
  greetadmin()
  {
    alert("Hola Admin!!");
  }
}
