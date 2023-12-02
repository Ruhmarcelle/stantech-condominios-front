import { Sessao } from './../types/type';
import { Injectable } from '@angular/core';

const KEY = 'sessaoUsuarioLogado';

@Injectable({
  providedIn: 'root'
})

export class SessaoService {
  
  salvarSessao(sessao: Sessao) {
    return localStorage.setItem(KEY, JSON.stringify(sessao));
  }

  excluirSessao() {
    localStorage.removeItem(KEY)
  }

  retornarSessao() {
    return JSON.parse(localStorage.getItem(KEY) ?? '')
  }
  
  possuiSessao() {
    return !!this.retornarSessao();
  }
}


