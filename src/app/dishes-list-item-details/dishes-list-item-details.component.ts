import {Component, OnInit} from '@angular/core';
import {Dish} from "../models/dish.model";
import {DishesService} from "../menu/dishes.service";
import {Subscription} from "rxjs/internal/Subscription";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

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
      .subscribe(res => {
        this.dish = res;
        if (this.dishForm) {
          this.dishForm.setValue({
            name: res.name,
            description: res.description,
            price: res.price,
            isAvailable: res.isAvailable,
            type: res.type
          })
        }
      });

    this.makeForm();
  }

  makeForm() {
    this.dishForm = new FormGroup({
      'name': new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      'description': new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      'price': new FormControl('', [
        Validators.required,
        Validators.min(0.01)
      ]),
      'isAvailable': new FormControl(),
      'type': new FormControl()
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

    if (this.dishForm.get('isAvailable').value === 'true') {
      this.dish.isAvailable = true;
    } else {
      this.dish.isAvailable = false;
    }

    this.sub = this.dishesService.editDish(this.dish).subscribe();
    alert('Edit');
  }
}
