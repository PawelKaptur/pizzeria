import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {User} from "../models/user.model";
import {LoginService} from "../login.service";
import {Subscription} from "rxjs/internal/Subscription";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: User[];
  sub: Subscription;
  user: User;

  loginForm = new FormGroup({
    name: new FormControl(),
    password: new FormControl()
  });

  constructor(readonly loginService: LoginService) {
    this.user = <User>{};
  }

  ngOnInit() {
    this.sub = this.loginService.getUsers().subscribe(res => this.users = res);
  }

  login(): void {
    this.user.name = this.loginForm.get('name').value;
    this.user.password = this.loginForm.get('password').value;
    let i;
    for(i = 0; i < this.users.length; i++){
      if(this.users.find(u => u.name === this.user.name && u.password === this.user.password)){
        this.loginService.loginAdmin();
        alert('You are logged as ' + this.user.name);
        return;
      }
    }

    alert('Wrong name and password.');
  }
}
