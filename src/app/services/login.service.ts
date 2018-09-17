import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {User} from "../models/user.model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogged = false;

  constructor(private readonly http: HttpClient,
              private readonly route: Router) {

  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users');
  }

  loginAdmin() {
    this.isLogged = true;
    this.route.navigate(['/']);
  }

  logout() {
    this.isLogged = false;
    this.route.navigate(['/']);
  }
}
