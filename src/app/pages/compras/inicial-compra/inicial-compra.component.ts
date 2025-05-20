import { Component, OnInit } from '@angular/core';
import { MenuVertComponent } from '../../shared/menu-vert/menu-vert.component';
import { PerfilUsComponent } from '../../shared/perfil-us/perfil-us.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-inicial-compra',
  standalone: true,
  imports: [MenuVertComponent, PerfilUsComponent, NgFor ],
  templateUrl: './inicial-compra.component.html',
  styleUrls: ['./inicial-compra.component.css']
})

export class InicialCompraComponent implements OnInit {

  pedidos: Array<{ id: string; valor: string; fornecedor: string; previsao: string; destaque?: string }> = [
    { id: '00012', valor: 'R$00000,00', fornecedor: 'Lucas Ferraz Santos', previsao: '23/04/2025', destaque: 'vermelho' },
    { id: '00011', valor: 'R$00000,00', fornecedor: 'Carla Meire Teixeira Silva', previsao: '24/04/2025', destaque: 'azul' },
    { id: '00010', valor: 'R$00000,00', fornecedor: 'Gabriel Henrique Ferreia Veríssimo', previsao: '27/04/2025' },
    { id: '00009', valor: 'R$00000,00', fornecedor: 'Fernando Augusto da Silva Goias', previsao: '29/04/2025' },
    { id: '00008', valor: 'R$00000,00', fornecedor: 'Mariana Beatriz Fontes', previsao: '05/05/2025' },
    { id: '00007', valor: 'R$00000,00', fornecedor: 'Lucas Ferraz Santos', previsao: '16/05/2025' },
    { id: '00006', valor: 'R$00000,00', fornecedor: 'Fernando Augusto Pontes Teixeira Silva', previsao: '05/05/2025' },
    { id: '00005', valor: 'R$00000,00', fornecedor: 'Gabriel Henrique Gusto de Sant', previsao: '27/04/2025' },
    { id: '00004', valor: 'R$00000,00', fornecedor: 'Fernando Augusto Gonçalves', previsao: '29/04/2025' },
    { id: '00003', valor: 'R$0,00', fornecedor: 'Mariana Beatriz Pereira', previsao: '05/05/2025' },
    { id: '00002', valor: 'R$0,00', fornecedor: 'Lucas Ferraz Santos', previsao: '16/05/2025' },
    { id: '00001', valor: 'R$0,00', fornecedor: 'Fernando Augusto', previsao: '05/05/2025' }
  ];

  ngOnInit(): void {
    const tbody = document.getElementById('order-list') as HTMLElement;

    this.pedidos.forEach(pedido => {
      const tr = document.createElement('tr');

      // Lógica de cor baseada no destaque
      if (pedido.destaque === 'vermelho') {
        tr.style.backgroundColor = '#FF9587';
      } else if (pedido.destaque === 'azul') {
        tr.style.backgroundColor = '#376FAF';
      }

      tr.innerHTML = `
        <td>${pedido.id}</td>
        <td>${pedido.valor}</td>
        <td>${pedido.fornecedor}</td>
        <td>${pedido.previsao}</td>
        <td>
          <button class="btn-verificar">Verificar</button>
          <button class="btn-delete">
            <i class="bi bi-trash-fill"></i>
          </button>
        </td>
      `;

      tbody.appendChild(tr);
    });
  }
}
