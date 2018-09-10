import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Dish} from '../models/dish.model';
import {DishesService} from "../dishes.service";
import {Observable} from "rxjs/internal/Observable";

@Component({
  selector: 'app-dishes-list-item',
  templateUrl: './dishes-list-item.component.html',
  styleUrls: ['./dishes-list-item.component.scss']
})
export class DishesListItemComponent {

  @Input() dish: Dish;

  constructor(readonly dishesService: DishesService) { }

  addItemToBasket(): void{
    this.dishesService.addDishToBasket(this.dish);
  }
}
