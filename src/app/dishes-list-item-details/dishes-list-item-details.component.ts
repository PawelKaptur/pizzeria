import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Dish} from "../models/dish.model";
import {DishesService} from "../menu/dishes.service";
import {Subscription} from "rxjs/internal/Subscription";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dish-list-item-details',
  templateUrl: './dishes-list-item-details.component.html',
  styleUrls: ['./dishes-list-item-details.component.scss']
})
export class DishesListItemDetailsComponent implements OnInit {

  dish: Dish = <Dish>{};
  sub: Subscription;
  dishForm: FormGroup;

  constructor(private readonly dishesService: DishesService,
              private readonly route: ActivatedRoute,
              private readonly router: Router) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.dishesService.getDish(+id)
      .subscribe(res => this.dish = res);

    this.makeForm();
  }

  makeForm() {
    this.dishForm = new FormGroup({
      'name': new FormControl(this.dish.name),
      'description': new FormControl(this.dish.description),
      'price': new FormControl(this.dish.price),
      'isAvailable': new FormControl(this.dish.isAvailable),
      'type': new FormControl(this.dish.type)
    });

  }

  changeAvailabilityOfDish() {
    this.dish.isAvailable = !this.dish.isAvailable;
    this.sub = this.dishesService.changeAvailabilityOfDish(this.dish).subscribe();
  }

  deleteDish() {
    this.sub = this.dishesService.deleteDishFromDatabase(this.dish).subscribe();
    this.router.navigate(['/']);
    alert('The dish was removed from database.');
  }

  editDish() {
    let dishId = this.dish.id;
    this.dish = this.dishForm.value;
    this.dish.id = dishId;
    this.sub = this.dishesService.editDish(this.dish).subscribe();
    alert('Edit');
  }
}
