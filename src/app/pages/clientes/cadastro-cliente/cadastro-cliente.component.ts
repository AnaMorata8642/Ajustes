import { Component, OnInit } from '@angular/core';
import { MenuVertComponent } from '../../shared/menu-vert/menu-vert.component';
import { PerfilUsComponent } from '../../shared/perfil-us/perfil-us.component';
import { Router } from 'express';

@Component({
  selector: 'app-cadastro-cliente',
  imports: [MenuVertComponent, PerfilUsComponent],
  templateUrl: './cadastro-cliente.component.html',
  styleUrl: './cadastro-cliente.component.css'
})
export class CadastroClienteComponent {
  // location: any;

  // constructor(private router: Router) { }

  // voltar() {
  //   this.location.back();
  // }
}
