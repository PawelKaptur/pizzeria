import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OrdersService} from "../orders-list/orders.service";
import {Subscription} from "rxjs/internal/Subscription";
import {Order} from "../models/order.model";
import {DishesService} from "../menu/dishes.service";
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
  addressForm: FormGroup;

  constructor(private readonly orderService: OrdersService, readonly dishesService: DishesService) {
    this.dishesIds = [];
    this.order = <Order>{};
  }

  ngOnInit() {
    this.addressForm = new FormGroup({
      'firstName': new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      'lastName': new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      'telephone': new FormControl('',[
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9)
      ]),
      'email': new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        Validators.email
      ]),
      'city': new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      'street': new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]),
    });

    this.getDishes();
  }

  createOrder(): void {
    this.order = this.addressForm.value;
    this.order.dishIds = this.dishesIds;
    this.order.state = 'Accepted';
    this.order.date = new Date();
    this.sub = this.orderService.createOrder(this.order).subscribe();
    alert("The order is accepted.");
  }

  getDishes(): void {
    this.dishes = this.dishesService.getBasketDishes();
    this.dishes.forEach(dish => this.dishesIds.push(dish.id));
  }
}
