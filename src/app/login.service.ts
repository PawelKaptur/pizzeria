import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {User} from "./models/user.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogged = false;

  constructor(readonly http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>('/api/users');
  }

  loginAdmin(){
    this.isLogged = true;
  }

  logout(){
    this.isLogged = false;
  }
}
