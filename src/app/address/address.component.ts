import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {OrderService} from "../order.service";
import {Subscription} from "rxjs/internal/Subscription";
import {Order} from "../models/order.model";
import {DishesService} from "../dishes.service";
import {Dish} from "../models/dish.model";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  sub: Subscription;
  order: Order;
  dishes: Dish[];
  dishesIds: number[];

  angularForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    telephone: new FormControl(),
    email: new FormControl(),
    city: new FormControl(),
    street: new FormControl()
  });

  constructor(readonly orderService: OrderService, readonly dishesService: DishesService) {
    this.dishesIds = [];
    this.order = <Order>{};
  }

  ngOnInit() {
    this.getDishes();
  }

  createOrder(): void {
    this.order.dishIds = this.dishesIds;
    this.sub = this.orderService.createOrder(this.order).subscribe();
  }

  getDishes(): void {
    this.dishes = this.dishesService.getBasketDishes();
    this.dishes.forEach(dish => this.dishesIds.push(dish.id));
  }
}
