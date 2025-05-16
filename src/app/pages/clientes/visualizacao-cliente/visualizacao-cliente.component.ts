import { Component } from '@angular/core';
import { MenuVertComponent } from '../../shared/menu-vert/menu-vert.component';
import { PerfilUsComponent } from '../../shared/perfil-us/perfil-us.component';

@Component({
  selector: 'app-visualizacao-cliente',
  imports: [MenuVertComponent, PerfilUsComponent],
  templateUrl: './visualizacao-cliente.component.html',
  styleUrl: './visualizacao-cliente.component.css'
})
export class VisualizacaoClienteComponent {

}
