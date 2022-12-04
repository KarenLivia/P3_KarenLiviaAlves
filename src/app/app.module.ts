import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgendamentosComponent } from './agendamentos/agendamentos.component';
import { CadastroProfissionalComponent } from './cadastro-profissional/cadastro-profissional.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { SairComponent } from './sair/sair.component';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: "agendamentos", component: AgendamentosComponent},
      {path: "cadastro-profissional", component: CadastroProfissionalComponent},
      {path: "cadastro-usuario", component: CadastroUsuarioComponent},
      {path: "", component: HomeComponent},
      {path:"sair", component: SairComponent},
    ])
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent ],
  bootstrap:    [ 
    AppComponent ]
})
export class AppModule { }
