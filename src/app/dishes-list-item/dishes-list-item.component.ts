import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Dish} from '../models/dish.model';
import {DishesService} from "../dishes.service";

@Component({
  selector: 'app-dishes-list-item',
  templateUrl: './dishes-list-item.component.html',
  styleUrls: ['./dishes-list-item.component.scss']
})
export class DishesListItemComponent {

  @Input() dish: Dish;

  constructor(readonly service: DishesService) { }

  addItemToBasket(){
    this.service.addDishToBasket(this.dish);
  }

}
