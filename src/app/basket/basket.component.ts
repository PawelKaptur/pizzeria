import {Component, OnInit} from '@angular/core';
import {Dish} from "../models/dish.model";
import {DishesService} from "../menu/dishes.service";


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  dishes: Dish[];

  constructor(private readonly dishesService: DishesService) {

  }

  ngOnInit(): void {
    this.getBasketDishes();
  }

  getBasketDishes(): void {
    this.dishes = this.dishesService.getBasketDishes();
    this.setBasketCost();
  }

  setBasketCost(): void{
    document.getElementById('basket-cost').innerText = this.dishesService.calculateBasketCost().toString();
  }

  deleteFromBasket(index: number){
    this.dishesService.deleteFromBasket(index);
    this.setBasketCost();
  }
}
