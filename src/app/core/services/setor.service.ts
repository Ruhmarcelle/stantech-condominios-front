import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Setor } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class SetorService {
  private apiUrl: string = environment.apiUrl
  private cache$?: Observable<Setor[]>;

  constructor(
    private http: HttpClient
  ) { 
  }

  listar() : Observable<Setor[]> {
    if (!this.cache$) {
      this.cache$ = this.getSetor().pipe(
        shareReplay(1)
      );
    }

    return this.cache$;
  }

  private getSetor(): Observable<Setor[]> {
    return this.http.get<Setor[]>(`${this.apiUrl}/meucondominio/setor/consultar`);
  }
}
