import { Injectable } from '@angular/core';

class cadastroProfissional {
  title: string;
}

@Injectable()
export class CadastroProfissionalService {
  private cadastroP: cadastroProfissional[] = [];

  constructor() {}

  add(title: string) {
    this.cadastroP.push({ title });
  }
  remove(index: number) {
    this.cadastroP.splice(index, 1);
  }
  getList() {
    return this.cadastroP;
  }
}