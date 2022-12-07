import { Injectable } from '@angular/core';

class cadastroCliente {
  name: string;
}

@Injectable()
export class CadastroClienteService {
  private nameC: cadastroCliente[] = [];

  constructor() {}

  add(name: string) {
    this.nameC.push({ name });
  }
  remove(index: number) {
    this.nameC.splice(index, 1);
  }
  getList() {
    return this.nameC;
  }
}