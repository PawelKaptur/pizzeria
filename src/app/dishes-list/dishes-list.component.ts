import {Component, OnInit} from '@angular/core';

import {Dish} from "../models/dish.model";

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.scss']
})
export class DishesListComponent implements OnInit {

  readonly dishes = [
    <Dish>{
      id: 1,
      name: "Pizza Margherita",
      isAvailable: true,
      description: "Sos, ser",
      type: "pizza",
      price: 22
    },
    <Dish>{
      id: 2,
      name: "Pizza asdsadsa",
      isAvailable: true,
      description: "Sos, ser, pieczarki",
      type: "pizza",
      price: 30
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
