import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Dish} from '../models/dish.model';
import {DishesService} from "../menu/dishes.service";
import {Observable} from "rxjs/internal/Observable";
import {LoginService} from "../login/login.service";

@Component({
  selector: 'app-dishes-list-item',
  templateUrl: './dishes-list-item.component.html',
  styleUrls: ['./dishes-list-item.component.scss']
})
export class DishesListItemComponent {

  @Input() dish: Dish;

  constructor(readonly dishesService: DishesService,
              readonly loginService: LoginService) { }

  addItemToBasket(): void{
    this.dishesService.addDishToBasket(this.dish);
  }
}
