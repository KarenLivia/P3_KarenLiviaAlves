import { Injectable } from '@angular/core';

class loginUsuario {
  name: string;
  //senha: string;
}

@Injectable()
export class LoginService {
  private nameU: loginUsuario[] = [];

  constructor() { }

  checkLogin(){

  }

  add(name: string) {
    this.nameU.push({ name });
  }
  remove(index: number) {
    this.nameU.splice(index, 1);
  }
  getList() {
    return this.nameU;
  }

}
