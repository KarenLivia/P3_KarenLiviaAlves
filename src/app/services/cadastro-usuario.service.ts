import { Injectable } from '@angular/core';

class cadastroUsuario {
  title: string;
}

@Injectable()
export class CadastroUsuarioService {
  private cadastroU: cadastroUsuario[] = [];

  constructor() {}

  add(title: string) {
    this.cadastroU.push({ title });
  }
  remove(index: number) {
    this.cadastroU.splice(index, 1);
  }
  getList() {
    return this.cadastroU;
  }
}