import { Component, OnInit } from '@angular/core';
import { CadastroProfissionalService } from '../../services/cadastro-profissional.service';

@Component({
  selector: 'app-cadastro-profissional',
  templateUrl: './cadastro-profissional.component.html',
  styleUrls: ['./cadastro-profissional.component.css']
})
export class CadastroProfissionalComponent implements OnInit {

  constructor(public cadastroP: CadastroProfissionalService) { }

  ngOnInit() {
  }

}