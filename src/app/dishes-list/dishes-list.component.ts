import {Component, OnDestroy, OnInit} from '@angular/core';

import {Dish} from '../models/dish.model';
import {DishesService} from '../dishes.service';
import {Subscription} from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.scss']
})
export class DishesListComponent implements OnInit, OnDestroy {

  dishes: Dish[];
  sub: Subscription;

  constructor(readonly service: DishesService) {

  }

  ngOnInit(): void {
    this.sub = this.service.getDishes()
      .subscribe(res => this.dishes = res)
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
