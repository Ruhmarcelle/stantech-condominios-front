import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/core/services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup; 
  private usuarioLogado: boolean = false; 
  private msgLogin: string = '';
  
  constructor(private formBuilder: FormBuilder,
    private service: AutenticacaoService,
    private router: Router){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, Validators.required]
    })
  }

  login(){

    console.log("Inicio Login");

    const email = this.loginForm.value.email;
    const senha = this.loginForm.value.senha;

    this.service.autenticar(email, senha).subscribe({
      next: (value) => {
        
        this.usuarioLogado = true;
        console.log("Login com sucesso", value);
        this.msgLogin == value;
       
        setTimeout(() =>  {
            this.router.navigateByUrl('/');
        },
        3000);

      }, error: (err) =>{
        console.log("Erro no login", err);
      } 
    });
  }
}
