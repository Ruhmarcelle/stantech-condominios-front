import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) {}

  autenticar(email:string, senha:string):Observable<any>{
    return this.http.post(`${this.apiUrl}/meucondominio/login/validar`, {email,senha})
  }

}
