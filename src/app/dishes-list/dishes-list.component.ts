import {Component, OnDestroy, OnInit} from '@angular/core';

import {Dish} from '../models/dish.model';
import {DishesService} from '../dishes.service';
import {Subscription} from 'rxjs/internal/Subscription';
import {OrdersService} from "../orders.service";
import {Order} from "../models/order.model";

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.scss']
})
export class DishesListComponent implements OnInit, OnDestroy {

  dishes: Dish[];
  orders: Order[];
  sub: Subscription;

  constructor(readonly service: DishesService,
              readonly ordersService: OrdersService) {

  }

  ngOnInit(): void {
    this.sub = this.service.getDishes()
      .subscribe(res => this.dishes = res)
  }

  getPizza(): void {
    this.sub = this.service.getPizza()
      .subscribe(res => this.dishes = res)
  }

  getPasta(): void {
    this.sub = this.service.getPasta()
      .subscribe(res => this.dishes = res)
  }

  getBeverage(): void {
    this.sub = this.service.getBeverage()
      .subscribe(res => this.dishes = res)
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
