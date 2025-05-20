import { Component } from '@angular/core';
import { MenuVertComponent } from '../../shared/menu-vert/menu-vert.component';
import { PerfilUsComponent } from '../../shared/perfil-us/perfil-us.component';

@Component({
  selector: 'app-visu-conta-cliente',
  imports: [MenuVertComponent, PerfilUsComponent],
  templateUrl: './visu-conta-cliente.component.html',
  styleUrl: './visu-conta-cliente.component.css'
})
export class VisuContaClienteComponent {

}
