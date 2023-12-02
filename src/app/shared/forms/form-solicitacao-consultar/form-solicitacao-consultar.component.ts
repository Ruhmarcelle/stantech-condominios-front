import { SessaoService } from './../../../core/services/sessao.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTable, MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { SolicitacaoConulta, Sessao, historicoSolicitacao } from 'src/app/core/types/type';
import { SolicitacaoService } from 'src/app/core/services/solicitacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-solicitacao-consultar',
  templateUrl: './form-solicitacao-consultar.component.html',
  styleUrls: ['./form-solicitacao-consultar.component.scss'],
})


export class FormSolicitacaoConsultarComponent implements OnInit {


  constructor(private solicitacaoService: SolicitacaoService,
    private sessaoService: SessaoService,
    private router: Router){}

  ELEMENT_DATA: historicoSolicitacao[] = [];
  dataSource = [...this.ELEMENT_DATA];

  displayedColumns: string[] = ['solicitacao', 'data', 'setor', 'areaComum', 'status'];
  

  @ViewChild(MatTable)
  table!: MatTable<historicoSolicitacao>;

  ngOnInit() {

    const sessaoUsuarioLogado: Sessao = this.sessaoService.retornarSessao();
    
    this.solicitacaoService.listar(sessaoUsuarioLogado.email).subscribe({
      next: (value:SolicitacaoConulta[]) => {
        
        console.log(value)

        value.forEach(solicitacao => {

          console.log(solicitacao)

          this.dataSource.push(
            {
              solicitacao: solicitacao.idSolicitacao, 
              data: solicitacao.dataSolicitacao, 
              setor: solicitacao.setor.nome, 
              areaComum: solicitacao.areaComum.nome,
              statusSolicitacao: solicitacao.statusSolicitacao
            },
          );

          this.table.renderRows();
        });

        
      }, error: (err) =>{
        console.log("Erro no Cadastro", err);
      } 
    });
      
  }

  novaSolicitacao(){
    this.router.navigateByUrl('/solicitacao');
  }

  addData() {
    const randomElementIndex = Math.floor(Math.random() * this.ELEMENT_DATA.length);
    this.dataSource.push(this.ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }

}


