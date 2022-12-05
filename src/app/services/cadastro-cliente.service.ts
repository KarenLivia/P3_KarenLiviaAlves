import { Injectable } from '@angular/core';

class cadastroCliente {
  title: string;
}

@Injectable()
export class CadastroClienteService {
  private cadastroC: cadastroCliente[] = [];

  constructor() {}

  add(title: string) {
    this.cadastroC.push({ title });
  }
  remove(index: number) {
    this.cadastroC.splice(index, 1);
  }
  getList() {
    return this.cadastroC;
  }
}