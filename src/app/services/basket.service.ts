import { Injectable } from '@angular/core';
import {Dish} from "../models/dish.model";

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  basketDishes: Dish[];
  basketCost: number;

  constructor() {
    this.basketDishes = [];
    this.basketCost = 0;
  }

  getBasketDishes(): Dish[] {
    return this.basketDishes;
  }

  addDishToBasket(dish: Dish): void {
    this.basketDishes.push(dish);
    this.calculateBasketCost();
  }

  calculateBasketCost(): number {
    this.basketCost = 0;
    this.basketDishes.forEach(dish => this.basketCost += dish.price);
    return this.basketCost;
  }

  deleteFromBasket(index: number): void {
    this.basketDishes.splice(index, 1);
    this.calculateBasketCost();
  }
}
