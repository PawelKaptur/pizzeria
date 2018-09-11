import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoginService} from "../login.service";
import {Dish} from "../models/dish.model";
import {Subscription} from "rxjs/internal/Subscription";
import {DishesService} from "../dishes.service";
import {Order} from "../models/order.model";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

  dishes: Dish[];
  orders: Order[];
  sub: Subscription;

  constructor(readonly loginService: LoginService,
              private readonly dishesService: DishesService) { }

  ngOnInit() {
    this.getAllDishes();
  }

  getAllDishes(): void {
    this.sub = this.dishesService.getDishes()
      .subscribe(res => this.dishes = res);
  }

  getPizza(): void {
    this.sub = this.dishesService.getPizza()
      .subscribe(res => this.dishes = res)
  }

  getPasta(): void {
    this.sub = this.dishesService.getPasta()
      .subscribe(res => this.dishes = res)
  }

  getBeverage(): void {
    this.sub = this.dishesService.getBeverage()
      .subscribe(res => this.dishes = res)
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
