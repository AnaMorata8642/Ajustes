import { NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-perfil-us',
  imports: [NgIf],
  templateUrl: './perfil-us.component.html',
  styleUrl: './perfil-us.component.css'
})

export class PerfilUsComponent {
  @ViewChild('dialogRef') dialogRef!: ElementRef<HTMLDialogElement>;
  dialogAberto = false;
  alternarDialog(event: MouseEvent): void {
    event.stopPropagation(); // Impede o fechamento

    const dialog = this.dialogRef.nativeElement;
    const telaF = this.el.nativeElement.querySelector('.tela');

    if (!dialog.open && telaF) {
      dialog.show();
      this.dialogAberto = true;
      telaF.classList.add('fec');
    } else {
      dialog.close();
      this.dialogAberto = false;
      telaF.classList.remove('fec');
    }
  }
  fecharDialog(): void {
    const dialog = this.dialogRef.nativeElement;
    const telaF = this.el.nativeElement.querySelector('.tela');
    
    if (dialog.open) {
      dialog.close();
      this.dialogAberto = false;
      telaF.classList.remove('fec');
    }
  }
  constructor(private el: ElementRef) { }
}