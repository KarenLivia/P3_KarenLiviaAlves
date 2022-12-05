import { Component, OnInit } from '@angular/core';
import { CadastroClienteService } from '../../services/cadastro-cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  constructor(public nameC: CadastroClienteService) {}

  ngOnInit() {
  }

  cadastrarCliente(name: string, cell: number){
    
  }

}