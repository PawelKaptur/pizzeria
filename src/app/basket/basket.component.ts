import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Dish} from "../models/dish.model";
import {DishesService} from "../dishes.service";


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

/*  setIdsForBasketItems(): string {
    return 'item_' + ++this.index;
  }

  setIdsForButtons(): string {
    return 'button_item_' + this.index;
  }

  setAttributes(): void {
    let i;
    for(i = 0; i < this.dishes.length; i++){
      document.getElementById('button_item_' + i).setAttribute('(click)', 'deleteFromBasket('+i+', $event)');
    }
  }*/

  deleteFromBasket(index: number, event: Event){
    //this.deletes.emit(dish);
    this.service.deleteFromBasket(index);
    this.setBasketCost();
    this.index = 0;
    event.stopPropagation();
  }
}
