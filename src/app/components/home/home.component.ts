import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
//import { LoginService } from '../../services/login.service';

interface Auth{
  token: string;
  username: string;
  profile: Array<String>;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  loading = false;
  error = null;

  site = 'https://glacial-scrubland-11809.herokuapp.com';
  name = 'teste';

  login = '';
  password = '';

  auth = null;
  list = null;

  constructor(public http: HttpClient) {}
  
  postLogin() {
    this.error = null;
    this.loading = true;
    let url = this.site + '/login';
    let parameters = { login: this.login, senha: this.password };
    this.http.post<Auth>(url, parameters).subscribe({
      next: (data) => {
        this.auth = data;
        this.loading = false;
      },
      error: (error) => {
        this.error = error;
        this.loading = false;
      },
    });
  }

  postLogout() {
    this.auth = null;
  }

  getList() {
    this.loading = true;
    this.error = null;
    let url = this.site + '/pessoas_fisicas';
    let parameters = { headers: { Authorization: 'Bearer ' + this.auth.token }};
    this.http.get<any>(url, parameters).subscribe({
      next: (data) => {
        this.list = data;
        this.loading = false;
      },
      error: (error) => {
        this.error = error;
        this.loading = false;
      },
    });
  }
}
