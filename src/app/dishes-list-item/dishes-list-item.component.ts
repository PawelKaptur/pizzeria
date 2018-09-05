import {Component, Input} from '@angular/core';
import {Dish} from '../models/dish.model';

@Component({
  selector: 'app-dishes-list-item',
  templateUrl: './dishes-list-item.component.html',
  styleUrls: ['./dishes-list-item.component.scss']
})
export class DishesListItemComponent {

  @Input() dish: Dish;

  constructor() { }

}
