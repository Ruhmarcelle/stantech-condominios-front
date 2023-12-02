import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { SetorService } from 'src/app/core/services/setor.service';
import { Setor } from 'src/app/core/types/type';

@Component({
  selector: 'app-dropdown-setor',
  templateUrl: './dropdown-setor.component.html',
  styleUrls: ['./dropdown-setor.component.scss']
})
export class DropdownSetorComponent implements OnInit {

  @Input() label: string = '';
  @Input() iconePrefixo: string = '';
  @Input() placeholder: string = '';
  @Input() control!: FormControl;

  setores: Setor[] = [];

  filteredOptions$?: Observable<Setor[]>;

  constructor(
    private setorService: SetorService) {
  }

  ngOnInit(): void {
    this.setorService.listar()
      .subscribe(dados => {
        this.setores = dados
        console.log(this.setores)
      })
    this.filteredOptions$ = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this.filtrarSetor(value))
    )
  }

  filtrarSetor(value: string | Setor): Setor[] {
    
    const setorNome = typeof value === 'string' ? value : value?.nome;
    const valorFiltrado = setorNome?.toLowerCase();
    const result = this.setores.filter(
      setor => setor.nome.toLowerCase().includes(valorFiltrado)
    )
    return result
  }

  displayFn(setor: Setor): string {
    return setor && setor.nome ? setor.nome : '';
  }
}
