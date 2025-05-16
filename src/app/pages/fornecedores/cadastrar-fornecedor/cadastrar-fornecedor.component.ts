import { Component } from '@angular/core';
import { MenuVertComponent } from '../../shared/menu-vert/menu-vert.component';
import { PerfilUsComponent } from '../../shared/perfil-us/perfil-us.component';

@Component({
  selector: 'app-cadastrar-fornecedor',
  imports: [MenuVertComponent, PerfilUsComponent],
  templateUrl: './cadastrar-fornecedor.component.html',
  styleUrl: './cadastrar-fornecedor.component.css'
})
export class CadastrarFornecedorComponent {

}
