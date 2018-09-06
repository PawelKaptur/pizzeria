import { Component, OnInit } from '@angular/core';
import {Dish} from "../models/dish.model";
import {Subscription} from "rxjs/internal/Subscription";
import {DishesService} from "../dishes.service";


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  dishes: Dish[];

  constructor(readonly service: DishesService) { }

  ngOnInit(): void {
    this.getDishes();
  }

  getDishes(): Dish[] {
    this.dishes = this.service.getBasketDishes();
    return this.dishes;
  }

}
