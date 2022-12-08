import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AgendamentosComponent } from './components/agendamentos/agendamentos.component';
import { CadastroProfissionalComponent } from './components/cadastro-profissional/cadastro-profissional.component';
import { CadastroClienteComponent } from './components/cadastro-cliente/cadastro-cliente.component';
import { SairComponent } from './components/sair/sair.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { CadastroClienteService } from './services/cadastro-cliente.service';
import { CadastroProfissionalService } from './services/cadastro-profissional.service';
import { CadastroServicoComponent } from './components/cadastro-servico/cadastro-servico.component';
import { CadastroServicoService } from './services/cadastro-servico.service';
import { LoginService } from './services/login.service';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: "agendamentos", component: AgendamentosComponent},
      {path: "cadastro-profissional", component: CadastroProfissionalComponent},
      {path: "cadastro-cliente", component: CadastroClienteComponent},
      {path: "", component: HomeComponent},
      {path: "sair", component: HomeComponent},
      {path: "sobre", component: SobreComponent},
      {path: "cadastro-servico", component: CadastroServicoComponent},
    ])
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    AgendamentosComponent,
    CadastroProfissionalComponent,
    CadastroClienteComponent,
    HomeComponent,
    NavbarComponent,
    SairComponent,
    SobreComponent,
    CadastroServicoComponent ],
  bootstrap:    [ 
    AppComponent ],
  providers: [CadastroClienteService, CadastroProfissionalService, CadastroServicoService, LoginService],
})
export class AppModule { }
