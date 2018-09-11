import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Dish} from "../models/dish.model";
import {DishesService} from "../menu/dishes.service";


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  dishes: Dish[];
  index: number;

  @Output() deletes = new EventEmitter<Dish>();

  constructor(readonly service: DishesService) {
    this.index = -1;
  }

  ngOnInit(): void {
    this.getBasketDishes();
  }

  getBasketDishes(): void {
    this.dishes = this.service.getBasketDishes();
    this.setBasketCost();
  }

  setBasketCost(): void{
    document.getElementById('basket-cost').innerText = this.service.calculateBasketCost().toString();
  }

  deleteFromBasket(index: number){
    this.service.deleteFromBasket(index);
    this.setBasketCost();
    this.index = 0;

  }
}
