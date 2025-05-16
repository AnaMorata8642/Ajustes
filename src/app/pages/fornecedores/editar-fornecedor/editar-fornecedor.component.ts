import { Component } from '@angular/core';
import { MenuVertComponent } from '../../shared/menu-vert/menu-vert.component';
import { PerfilUsComponent } from '../../shared/perfil-us/perfil-us.component';

@Component({
  selector: 'app-editar-fornecedor',
  imports: [MenuVertComponent, PerfilUsComponent],
  templateUrl: './editar-fornecedor.component.html',
  styleUrl: './editar-fornecedor.component.css'
})
export class EditarFornecedorComponent {

}
