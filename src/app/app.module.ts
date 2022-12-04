import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AgendamentosComponent } from './components/agendamentos/agendamentos.component';
import { CadastroProfissionalComponent } from './components/cadastro-profissional/cadastro-profissional.component';
import { CadastroUsuarioComponent } from './components/cadastro-usuario/cadastro-usuario.component';
import { SairComponent } from './components/sair/sair.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { CadastroUsuarioService } from './services/cadastro-usuario.service';
import { CadastroProfissionalService } from './services/cadastro-profissional.service';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: "agendamentos", component: AgendamentosComponent},
      {path: "cadastro-profissional", component: CadastroProfissionalComponent},
      {path: "cadastro-usuario", component: CadastroUsuarioComponent},
      {path: "", component: HomeComponent},
      {path: "sair", component: HomeComponent},
      {path: "sobre", component: SobreComponent},
    ])
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    AgendamentosComponent,
    CadastroProfissionalComponent,
    CadastroUsuarioComponent,
    HomeComponent,
    NavbarComponent,
    SairComponent,
    SobreComponent ],
  bootstrap:    [ 
    AppComponent ],
  providers: [CadastroUsuarioService, CadastroProfissionalService],
})
export class AppModule { }
