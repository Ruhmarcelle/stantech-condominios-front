import { SessaoService } from './../../../core/services/sessao.service';
import { Timestamp } from 'rxjs';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SolicitacaoService } from 'src/app/core/services/solicitacao.service';
import { Solicitacao, AreaComum, Setor, Sessao } from 'src/app/core/types/type';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../modal/modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-solicitacao',
  templateUrl: './form-solicitacao.component.html',
  styleUrls: ['./form-solicitacao.component.scss']
})
export class FormSolicitacaoComponent implements OnInit{

  solicitacaoForm!: FormGroup;
  setorControl = new FormControl<Setor | null>(null, Validators.required);
  areaComumControl = new FormControl<AreaComum | null>(null, Validators.required);

  @Output() acaoClique: EventEmitter<any> = new EventEmitter<any>;

  constructor(private formBuilder: FormBuilder,
              private solicitacaoService: SolicitacaoService,
              private sessaoService: SessaoService,
              public dialog: MatDialog,
              private router: Router){}

  ngOnInit() {
    this.solicitacaoForm = this.formBuilder.group({
      setor: this.setorControl,
      areaComum: this.areaComumControl,
      assunto: [null, [Validators.required, Validators.minLength(3)]],
      descricao: [null, [Validators.required, Validators.minLength(3)]],
    })
    
  }

  executarAcao(solicitacaoForm: any){
 
    console.log(solicitacaoForm)

    const datepipe: DatePipe = new DatePipe('pt-BR') 
    const dataFormatada = datepipe.transform(new Date, 'YYYY-MM-dd HH:mm:ss')

    const sessaoUsuarioLogado: Sessao = this.sessaoService.retornarSessao();

    console.log(sessaoUsuarioLogado);

    const solicitacao: Solicitacao = {
      email: sessaoUsuarioLogado.email,
      setor: solicitacaoForm.value.setor,
      area_comum: solicitacaoForm.value.areaComum,
      assunto: solicitacaoForm.value.assunto,
      descricao: solicitacaoForm.value.descricao,
      data_solicitacao: String(dataFormatada),
    }

    console.log(solicitacao)
    this.solicitacaoService.cadastrar(solicitacao).subscribe({
      next: (value) => {
        console.log("Solicitação enviada com sucesso", value);
        
        console.log(this.solicitacaoForm.get('assunto'))

      }, error: (err) =>{
        console.log("Erro na Solicitação", err);
      } 
    });

    this.openDialog()

    
  }

  openDialog() {
    this.dialog.open(ModalComponent);
  }
}
