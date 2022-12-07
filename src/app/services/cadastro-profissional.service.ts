import { Injectable } from '@angular/core';

class cadastroProfissional {
  name: string;
}

@Injectable()
export class CadastroProfissionalService {
  private cadastroP: cadastroProfissional[] = [];

  constructor() {}

  add(name: string) {
    this.cadastroP.push({ name });
  }
  remove(index: number) {
    this.cadastroP.splice(index, 1);
  }
  getList() {
    return this.cadastroP;
  }
}