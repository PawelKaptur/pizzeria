import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Dish} from "../models/dish.model";
import {DishesService} from "../menu/dishes.service";
import {Subscription} from "rxjs/internal/Subscription";

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.scss']
})
export class AddDishComponent implements OnInit {

  dish: Dish;
  sub: Subscription;
  addDishForm: FormGroup;

  constructor(private readonly dishesService: DishesService) { }

  ngOnInit() {
    this.addDishForm = new FormGroup({
      'name': new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      'isAvailable': new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      'type': new FormControl('', [
        Validators.required,
      ]),
      'price': new FormControl('', [
        Validators.required,
      ]),
      'description': new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ])
    });
  }

  createDish() {
    this.sub = this.dishesService.addDish(this.addDishForm.value).subscribe();
  }
}
