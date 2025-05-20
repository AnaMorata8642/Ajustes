import { Routes } from '@angular/router';

import { CadastroUsComponent } from './pages/contaUs/cadastro-us/cadastro-us.component';
import { LoginUsComponent } from './pages/contaUs/login-us/login-us.component';
import { MenuVertComponent } from './pages/shared/menu-vert/menu-vert.component';
import { PerfilUsComponent } from './pages/shared/perfil-us/perfil-us.component';
import { MetaQComponent } from './pages/meta-q/meta-q.component';
import { MenuVert2Component } from './pages/shared/menu-vert2/menu-vert2.component';
import { CadastroClienteComponent } from './pages/clientes/cadastro-cliente/cadastro-cliente.component';
import { ClienteComponent } from './pages/clientes/cliente/cliente.component';
import { EditarClienteComponent } from './pages/clientes/editar-cliente/editar-cliente.component';
import { VisualizacaoClienteComponent } from './pages/clientes/visualizacao-cliente/visualizacao-cliente.component';
import { CadastrarFornecedorComponent } from './pages/fornecedores/cadastrar-fornecedor/cadastrar-fornecedor.component';
import { EditarFornecedorComponent } from './pages/fornecedores/editar-fornecedor/editar-fornecedor.component';
import { VisuContaClienteComponent } from './pages/clientes/visu-conta-cliente/visu-conta-cliente.component';
import { InicialCompraComponent } from './pages/compras/inicial-compra/inicial-compra.component';

export const routes: Routes = [
    { path: '', component: LoginUsComponent},
    { path: 'cadastro-us', component: CadastroUsComponent },
    { path: 'menu-vert', component: MenuVertComponent },
    { path: 'perfil-us', component: PerfilUsComponent },
    { path: 'meta-q', component: MetaQComponent},
    { path: 'menu-vert2', component: MenuVert2Component},
    { path: 'cliente', component: ClienteComponent},
    { path: 'cadastro-cliente', component: CadastroClienteComponent},
    { path: 'editar-cliente', component: EditarClienteComponent},
    { path: 'visualizacao-cliente', component: VisualizacaoClienteComponent},
    { path: 'cadastrar-fornecedor', component: CadastrarFornecedorComponent},
    { path: 'editar-fornecedor', component: EditarFornecedorComponent},
    { path: 'visu-conta-cliente', component: VisuContaClienteComponent},
    { path: 'inicial-compras', component: InicialCompraComponent}

];