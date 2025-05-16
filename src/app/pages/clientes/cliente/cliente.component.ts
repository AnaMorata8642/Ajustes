import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuVertComponent } from '../../shared/menu-vert/menu-vert.component';
import { PerfilUsComponent } from '../../shared/perfil-us/perfil-us.component';
import { RouterLink } from '@angular/router';
import { CadastroClienteComponent } from '../cadastro-cliente/cadastro-cliente.component';

@Component({
  selector: 'app-cliente',
  imports: [FormsModule, CommonModule, MenuVertComponent, PerfilUsComponent, RouterLink],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
  termoBusca: any;
  adicionarItem() {
  throw new Error('Method not implemented.');
  }
  buscar() {
  throw new Error('Method not implemented.');
  }
    pessoas = [
      { id: '00001', nome: 'Rafael Eduardo Cavalcante' },
      { id: '00002', nome: 'Isadora Cristina Vasques Mendonça' },
      { id: '00003', nome: 'Fernando Augusto Ribeiro Castanho' },
      { id: '00004', nome: 'Mariana Beatriz Fontes de Alencar' },
      { id: '00005', nome: 'Gabriel Henrique Montenegro Soares' },
      { id: '00006', nome: 'Carla Meire Teixeira Silva' },
      { id: '00007', nome: 'Maria Aparecida Alves Chaves Gonçalves' },
      { id: '00008', nome: 'Outro Nome Teste' },
      { id: '00009', nome: 'Mais Um Nome de Exemplo' },
      { id: '00007', nome: 'Maria Aparecida Alves Chaves Gonçalves' },
      { id: '00008', nome: 'Outro Nome Teste' },
      { id: '00009', nome: 'Mais Um Nome de Exemplo' },
      { id: '00007', nome: 'Maria Aparecida Alves Chaves Gonçalves' },
      { id: '00008', nome: 'Outro Nome Teste' },
      { id: '00009', nome: 'Mais Um Nome de Exemplo' },
      { id: '00007', nome: 'Maria Aparecida Alves Chaves Gonçalves' },
      { id: '00008', nome: 'Outro Nome Teste' },
      { id: '00009', nome: 'Mais Um Nome de Exemplo' },
      { id: '00007', nome: 'Maria Aparecida Alves Chaves Gonçalves' },
      { id: '00008', nome: 'Outro Nome Teste' },
      { id: '00009', nome: 'Mais Um Nome de Exemplo' },
      { id: '00010', nome: 'Exemplo Final' }
    ];
}
