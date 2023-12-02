import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AreaComum } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class AreaComumService {
  private apiUrl: string = environment.apiUrl
  private cache$?: Observable<AreaComum[]>;

  constructor(
    private http: HttpClient
  ) { 
  }

  listar() : Observable<AreaComum[]> {
    if (!this.cache$) {
      this.cache$ = this.getAreaComum().pipe(
        shareReplay(1)
      );
    }

    return this.cache$;
  }

  private getAreaComum(): Observable<AreaComum[]> {
    return this.http.get<AreaComum[]>(`${this.apiUrl}/meucondominio/area-comum/consultar`);
  }
}
