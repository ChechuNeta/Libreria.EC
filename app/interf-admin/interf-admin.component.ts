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


}
