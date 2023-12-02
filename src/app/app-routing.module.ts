import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { SolicitacaoComponent } from './pages/solicitacao/solicitacao.component';
import { SolicitacaoConsultarComponent } from './pages/solicitacao-consultar/solicitacao-consultar.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'solicitacao',
    component: SolicitacaoComponent
  },
  {
    path: 'solicitacao-consultar',
    component: SolicitacaoConsultarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
