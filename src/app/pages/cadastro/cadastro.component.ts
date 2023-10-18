import { CadastroService } from './../../core/services/cadastro.service';
import { FormatWidth } from '@angular/common';
import { FormularioService } from './../../core/services/formulario.service';
import { Component } from '@angular/core';
import { PessoaUsuaria } from 'src/app/core/types/type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {

  constructor(private formularioService: FormularioService,
    private cadastroService: CadastroService,
    private router: Router){}

  perfilComponent = false;

  cadastrar(){
    var formCadastro = this.formularioService.getCadastro();

    console.log(formCadastro?.getRawValue() as PessoaUsuaria);

    if(formCadastro?.valid){

      //var pessoaUsuaria = formCadastro?.getRawValue() as PessoaUsuaria;
     
      var pessoaUsuaria: PessoaUsuaria = {
        nome: formCadastro.get('nome')?.value,
        nascimento: formCadastro.get('nascimento')?.value,
        cpf: formCadastro.get('cpf')?.value,
        contato: formCadastro.get('contato')?.value,
        email: formCadastro.get('email')?.value,
        senha: formCadastro.get('senha')?.value,
        cidade: formCadastro.get('cidade')?.value,
        unidade: {bloco: formCadastro.get('bloco')?.value, 
                  apartamento: formCadastro.get('cidade')?.value
                },
        estado: {id: 0, 
                  nome: formCadastro.get('nome')?.value, 
                  sigla: formCadastro.get('sigla')?.value
                },
        login: {senha: formCadastro.get('senha')?.value}
      };

      console.log(">>>> ", pessoaUsuaria)
          
      this.cadastroService.cadastrar(pessoaUsuaria).subscribe({
        next: (value) => {
          console.log("Cadastro com sucesso", value);
          this.router.navigateByUrl('/');
          
        }, error: (err) =>{
          console.log("Erro no Cadastro", err);
        } 
      });
    }
  }

}
