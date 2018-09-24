import {Component, OnInit} from '@angular/core';
import {Dish} from "../models/dish.model";
import {DishesService} from "../services/dishes.service";
import {BasketService} from "../services/basket.service";


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  dishes: Dish[];
  basketCost: number;

  constructor(private readonly basketService: BasketService) {
  }

  ngOnInit(): void {
    this.getBasketDishes();
  }

  getBasketDishes(): void {
    this.dishes = this.basketService.getBasketDishes();
    this.setBasketCost();
  }

  setBasketCost(): void {
    this.basketCost = this.basketService.calculateBasketCost();
  }

  deleteFromBasket(index: number) {
    this.basketService.deleteFromBasket(index);
    this.setBasketCost();
  }
}
