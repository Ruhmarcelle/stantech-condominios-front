import { DropdownSetorComponent } from './shared/dropdowns/dropdown-setor/dropdown-setor.component';
import { DropdownAreaComumComponent } from './shared/dropdowns/dropdown-area-comum/dropdown-area-comum.component';
import { ContainerComponent } from './shared/container/container.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { BannerComponent } from './shared/banner/banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownUfComponent } from './shared/dropdowns/dropdown-uf/dropdown-uf.component';
import { LoginComponent } from './pages/login/login.component';
import { FormBaseComponent } from './shared/forms/form-base/form-base.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { SolicitacaoComponent } from './pages/solicitacao/solicitacao.component';
import { FormSolicitacaoComponent } from './shared/forms/form-solicitacao/form-solicitacao.component';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import { ModalComponent } from './shared/modal/modal.component';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { SolicitacaoConsultarComponent } from './pages/solicitacao-consultar/solicitacao-consultar.component';
import { FormSolicitacaoConsultarComponent } from './shared/forms/form-solicitacao-consultar/form-solicitacao-consultar.component';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    HomeComponent,
    FooterComponent,
    DropdownUfComponent,
    ContainerComponent,
    LoginComponent,
    FormBaseComponent,
    FormSolicitacaoComponent,
    FormSolicitacaoConsultarComponent,
    CadastroComponent,
    SolicitacaoComponent,
    DropdownAreaComumComponent,
    DropdownSetorComponent,
    ModalComponent,
    SolicitacaoConsultarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatDividerModule,
    MatCheckboxModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt',
  },
  {
    provide: DEFAULT_CURRENCY_CODE,
    useValue: 'BRL',
  },
  {
    provide: MAT_DIALOG_DEFAULT_OPTIONS,
    useValue: {
      hasBackdrop: false
    }
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
