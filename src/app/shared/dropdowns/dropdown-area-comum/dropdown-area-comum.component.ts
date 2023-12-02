import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { AreaComumService } from 'src/app/core/services/area-comum.service';
import { AreaComum } from 'src/app/core/types/type';

@Component({
  selector: 'app-dropdown-area-comum',
  templateUrl: './dropdown-area-comum.component.html',
  styleUrls: ['./dropdown-area-comum.component.scss']
})
export class DropdownAreaComumComponent implements OnInit {
  @Input() label: string = '';
  @Input() iconePrefixo: string = '';
  @Input() placeholder: string = '';
  @Input() control!: FormControl;

  areasComum: AreaComum[] = [];

  filteredOptions$?: Observable<AreaComum[]>;

  constructor(
    private areaComumService: AreaComumService) {
  }

  ngOnInit(): void {
    this.areaComumService.listar()
      .subscribe(dados => {
        this.areasComum = dados
        console.log(this.areasComum)
      })
    this.filteredOptions$ = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this.filtrarSetor(value))
    )
  }

  filtrarSetor(value: string | AreaComum): AreaComum[] {
    
    const areaComumNome = typeof value === 'string' ? value : value?.nome;
    const valorFiltrado = areaComumNome?.toLowerCase();
    const result = this.areasComum.filter(
      areaComum => areaComum.nome.toLowerCase().includes(valorFiltrado)
    )
    return result
  }

  displayFn(setor: AreaComum): string {
    return setor && setor.nome ? setor.nome : '';
  }
}