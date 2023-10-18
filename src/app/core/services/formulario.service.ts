import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  private cadastroForm: FormGroup | null = null;

  constructor() {}

  getCadastro(): FormGroup | null{
    return this.cadastroForm
  }

  setCadastro(form: FormGroup){
    this.cadastroForm = form;
  }
}
