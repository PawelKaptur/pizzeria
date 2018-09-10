import {Component, OnDestroy, OnInit} from '@angular/core';

import {Dish} from '../models/dish.model';
import {DishesService} from '../dishes.service';
import {Subscription} from 'rxjs/internal/Subscription';
import {LoginService} from "../login.service";

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.scss']
})
export class DishesListComponent implements OnInit, OnDestroy {

  dishes: Dish[];
  sub: Subscription;

  constructor(readonly dishesService: DishesService,
              readonly loginService: LoginService) {

  }

  ngOnInit(): void {
    this.getAllDishes();
  }

  getAllDishes(): void {
    this.sub = this.dishesService.getDishes()
      .subscribe(res => this.dishes = res);
  }

  getPizza(): void {
    this.sub = this.dishesService.getPizza()
      .subscribe(res => this.dishes = res)
  }

  getPasta(): void {
    this.sub = this.dishesService.getPasta()
      .subscribe(res => this.dishes = res)
  }

  getBeverage(): void {
    this.sub = this.dishesService.getBeverage()
      .subscribe(res => this.dishes = res)
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
