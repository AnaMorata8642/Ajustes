import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MenuVert2Component } from '../shared/menu-vert2/menu-vert2.component';
import { PerfilUsComponent } from '../shared/perfil-us/perfil-us.component';
import {
  Chart,
  PieController,
  ArcElement,
  BarController,
  BarElement,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

@Component({
  selector: 'app-meta-q',
  imports: [MenuVert2Component, PerfilUsComponent],
  templateUrl: './meta-q.component.html',
  styleUrl: './meta-q.component.css'
})
export class MetaQComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;

  ngOnInit() {
    Chart.register(PieController, ArcElement, BarController, BarElement, LineController, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

    const data = {
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50],
        backgroundColor: [
          '#062863',
          '#C2CDD9'
        ],
        hoverOffset: 4
      }]
    };

    const config = {
      type: 'doughnut' as const,
      data: data
    };

    new Chart(this.canvas.nativeElement, config); // <-- esta linha cria o gráfico
  }
}