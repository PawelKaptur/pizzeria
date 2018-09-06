import {Component, Input, OnInit} from '@angular/core';
import {Dish} from "../models/dish.model";
import {DishesService} from "../dishes.service";


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  @Input() dish: Dish;
  dishes: Dish[];

  constructor(readonly service: DishesService) { }

  ngOnInit(): void {
    this.getBasketDishes();
  }

  getBasketDishes(): Dish[] {
    this.dishes = this.service.getBasketDishes();
    return this.dishes;
  }

}
