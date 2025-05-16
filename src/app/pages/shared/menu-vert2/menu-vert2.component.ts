import { Component, ElementRef, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-vert2',
  imports: [RouterLink],
  templateUrl: './menu-vert2.component.html',
  styleUrl: './menu-vert2.component.css'
})
export class MenuVert2Component {
  constructor(private el: ElementRef, private renderer: Renderer2, private router: Router) { }

  toggleMenu() {
    const menuVer = this.el.nativeElement.querySelector('.menuVertical');
    if (menuVer) {
      menuVer.classList.toggle('exp');
    }
  }
}