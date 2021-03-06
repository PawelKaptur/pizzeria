import {Component, Input} from '@angular/core';
import {Dish} from '../../models/dish.model';
import {DishesService} from "../../services/dishes.service";
import {LoginService} from "../../services/login.service";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs/internal/Subject";
import {BasketService} from "../../services/basket.service";

@Component({
  selector: 'app-dishes-list-item',
  templateUrl: './dishes-list-item.component.html',
  styleUrls: ['./dishes-list-item.component.scss']
})
export class DishesListItemComponent {

  private readonly destroy$ = new Subject();

  @Input() dish: Dish = <Dish>{};

  constructor(private readonly dishesService: DishesService,
              private readonly basketService: BasketService,
              readonly loginService: LoginService) { }

  addItemToBasket(): void{
    this.basketService.addDishToBasket(this.dish);
  }

  changeAvailabilityOfDish() {
    this.dish.isAvailable = !this.dish.isAvailable;
    this.dishesService.changeAvailabilityOfDish(this.dish).pipe(takeUntil(this.destroy$)).subscribe();
  }
}
