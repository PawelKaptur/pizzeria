import {Component, OnInit} from '@angular/core';
import {Dish} from "../models/dish.model";
import {DishesService} from "../services/dishes.service";


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  dishes: Dish[];
  basketCost: number;

  constructor(private readonly dishesService: DishesService) {

  }

  ngOnInit(): void {
    this.getBasketDishes();
  }

  getBasketDishes(): void {
    this.dishes = this.dishesService.getBasketDishes();
    this.setBasketCost();
  }

  setBasketCost(): void {
    this.basketCost = this.dishesService.calculateBasketCost();
  }

  deleteFromBasket(index: number) {
    this.dishesService.deleteFromBasket(index);
    this.setBasketCost();
  }
}
