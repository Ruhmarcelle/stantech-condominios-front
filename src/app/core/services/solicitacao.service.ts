import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Solicitacao } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService {

  private apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  cadastrar(solicitacao: Solicitacao):Observable<any>{
    return this.http.post(`${this.apiUrl}/meucondominio/solicitacao`, solicitacao)
  }

  listar(email: string):Observable<any>{
    return this.http.get(`${this.apiUrl}/meucondominio/solicitacao/listar/${email}`)
  }
}
