import {CanActivate} from "@angular/router";
import {LoginService} from "../login/login.service";
import {Injectable} from "@angular/core";

@Injectable()
export class RouteGuard implements CanActivate {

  constructor(private readonly loginService: LoginService){}

  canActivate(): boolean {
    return this.loginService.isLogged;
  }

}
