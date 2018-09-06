import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Dish} from "../models/dish.model";
import {DishesService} from "../dishes.service";


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  dishes: Dish[];
  @Output() deletes = new EventEmitter<Dish>();

  constructor(readonly service: DishesService) { }

  ngOnInit(): void {
    this.getBasketDishes();
  }

  getBasketDishes(): void {
    this.dishes = this.service.getBasketDishes();
  }

/*  deleteFromBasket(dish: Dish, event: Event){
    this.deletes.emit(dish);
    this.service.deleteFromBasket(dish);
    event.stopPropagation();
  }*/

  deleteFromBasket(index: number, event: Event){
    //this.deletes.emit(dish);
    this.service.deleteFromBasket(index);
    event.stopPropagation();
  }

}
