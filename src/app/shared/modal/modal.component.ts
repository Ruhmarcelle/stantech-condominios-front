import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  teste: Boolean = true;

  constructor(private router: Router){}

  direcionar(){
    this.router.navigateByUrl('/solicitacao-consultar');
  }

}
