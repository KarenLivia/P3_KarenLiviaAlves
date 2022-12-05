import { Injectable } from '@angular/core';

class cadastroCliente {
  name: string;
 // cell: number;
}

@Injectable()
export class CadastroClienteService {
  private nameC: cadastroCliente[] = [];
 // private cellphoneC: cadastroCliente[] = [];

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
/*
  add1(cell: number) {
    this.cellphoneC.push({ cell });
  }
  remove1(index: number) {
    this.cellphoneC.splice(index, 1);
  }
  getList1() {
    return this.cellphoneC;
  }*/
}