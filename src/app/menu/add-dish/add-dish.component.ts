import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DishesService} from "../../services/dishes.service";
import {Subscription} from "rxjs/internal/Subscription";
import {Dish} from "../../models/dish.model";
import {Subject} from "rxjs/internal/Subject";
import {takeLast, takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.scss']
})
export class AddDishComponent implements OnInit, OnDestroy {

  dish: Dish;
  addDishForm: FormGroup;
  private readonly destroy$ = new Subject();

  constructor(private readonly dishesService: DishesService) { }

  ngOnInit() {
    this.addDishForm = new FormGroup({
      'name': new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      'isAvailable': new FormControl('', [
        Validators.required,
      ]),
      'type': new FormControl('', [
        Validators.required,
      ]),
      'price': new FormControl('', [
        Validators.required,
        Validators.min(0.01)
      ]),
      'description': new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ])
    });
  }

  createDish() {
    this.dish = this.addDishForm.value;
    if(this.addDishForm.get('isAvailable').value === 'true'){
      this.dish.isAvailable = true;
    } else {
      this.dish.isAvailable = false;
    }

    this.dishesService.addDish(this.addDishForm.value).pipe(takeUntil(this.destroy$)).subscribe();
    alert('Dish was added.')
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
