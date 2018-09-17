import {Component, OnInit} from '@angular/core';
import {LoginService} from "../services/login.service";
import {Dish} from "../models/dish.model";
import {DishesService} from "../services/dishes.service";
import {Observable} from "rxjs/internal/Observable";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes$: Observable<Dish[]>;

  constructor(readonly loginService: LoginService,
              private readonly dishesService: DishesService) {
  }

  ngOnInit() {
    this.getAllDishes();
  }

  getAllDishes(): void {
    this.dishes$ = this.dishesService.getDishes();
  }

  getPizza(): void {
    this.dishes$ = this.dishesService.getPizza();
  }

  getPasta(): void {
    this.dishes$ = this.dishesService.getPasta();
  }

  getBeverage(): void {
    this.dishes$ = this.dishesService.getBeverage();
  }
}
