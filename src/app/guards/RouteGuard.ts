import {CanActivate, Router} from "@angular/router";
import {LoginService} from "../services/login.service";
import {Injectable} from "@angular/core";

@Injectable()
export class RouteGuard implements CanActivate {

  constructor(private readonly loginService: LoginService,
              private readonly route: Router){}

  canActivate(): boolean {
    const isLogged = this.loginService.isLogged;
    if(!isLogged){
      this.route.navigate(['/login']);
      alert("Only logged users can access further.")
    }

    return isLogged;
  }

}
