import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro-us',
  imports: [RouterLink],
  templateUrl: './cadastro-us.component.html',
  styleUrl: './cadastro-us.component.css'
})
export class CadastroUsComponent implements OnInit {
  isCadastro: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.updateToggleState(this.router.url);
  }

  updateToggleState(url: string): void {
    const toggleBg: HTMLElement | null = document.getElementById("toggle-bg");
    const cadastroText: HTMLElement | null = document.getElementById("cadastro");
    const loginText: HTMLElement | null = document.getElementById("login");

    this.isCadastro = url.includes('/cadastro-us');

    if (toggleBg) toggleBg.style.left = this.isCadastro ? "0" : "50%";
    if (cadastroText) {
      cadastroText.classList.toggle("active", this.isCadastro);
      cadastroText.classList.toggle("inactive", !this.isCadastro);
    }
    if (loginText) {
      loginText.classList.toggle("active", !this.isCadastro);
      loginText.classList.toggle("inactive", this.isCadastro);
    }
  }

  toggleSwitch(): void {
    this.isCadastro = !this.isCadastro;
    const newRoute = this.isCadastro ? '/cadastro-us' : '/login-us';
    this.router.navigate([newRoute]);
  }

  toggleSenha(): void {
    const senhaInput: HTMLInputElement | null = document.getElementById("senha") as HTMLInputElement;
    const olho: Element | null = document.querySelector(".toggle-password");

    if (senhaInput && olho) {
      if (senhaInput.type === "password") {
        senhaInput.type = "text";
        olho.classList.remove("bi-eye-slash");
        olho.classList.add("bi-eye");
      } else {
        senhaInput.type = "password";
        olho.classList.remove("bi-eye");
        olho.classList.add("bi-eye-slash");
      }
    }
  }

  toggleConfSenha(): void {
    const senhaInput: HTMLInputElement | null = document.getElementById("Confsenha") as HTMLInputElement;
    const olho: Element | null = document.querySelector(".toggle-passwordd");

    if (senhaInput && olho) {
      if (senhaInput.type === "password") {
        senhaInput.type = "text";
        olho.classList.remove("bi-eye-slash");
        olho.classList.add("bi-eye");
      } else {
        senhaInput.type = "password";
        olho.classList.remove("bi-eye");
        olho.classList.add("bi-eye-slash");
      }
    }
  }

  showLog(): void {
    const cadastro = document.getElementById("cadastro");
    const login = document.getElementById("login");

    if (login) {
      login.classList.toggle("fade_In");
    } else if (cadastro) {
      cadastro.classList.remove("fade_In");
    }
  }
}