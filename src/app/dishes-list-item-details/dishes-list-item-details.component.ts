import {Component, OnInit} from '@angular/core';
import {Dish} from "../models/dish.model";
import {DishesService} from "../menu/dishes.service";
import {Subscription} from "rxjs/internal/Subscription";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dish-list-item-details',
  templateUrl: './dishes-list-item-details.component.html',
  styleUrls: ['./dishes-list-item-details.component.scss']
})
export class DishesListItemDetailsComponent implements OnInit {

  dish: Dish = <Dish>{};
  sub: Subscription;

  constructor(private readonly dishesService: DishesService,
              private readonly route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.dishesService.getDish(+id)
      .subscribe(res => this.dish = res);
  }

  changeAvailabilityOfDish(){
    this.dish.isAvailable = !this.dish.isAvailable;
    this.sub = this.dishesService.changeAvailabilityOfDish(this.dish).subscribe();
  }

}
