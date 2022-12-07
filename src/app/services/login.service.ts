import { Injectable } from '@angular/core';

class loginUsuario {
  name: string;
  senha: string;
}

@Injectable()
export class LoginService {
  private nameU: loginUsuario[] = [];

  constructor() { }

  checkLogin(){
    
  }

}
