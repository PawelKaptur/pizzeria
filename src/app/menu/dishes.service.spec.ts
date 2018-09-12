import {inject, TestBed} from '@angular/core/testing';

import {DishesService} from './dishes.service';
import {HttpClient, HttpHandler} from "@angular/common/http";
import {Dish} from "../models/dish.model";

import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('DishesService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DishesService,
        HttpClient,
        HttpHandler],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([DishesService], (service: DishesService) => {
    expect(service).toBeTruthy();
  }));

  it('should add dish form basket', inject([DishesService], (service: DishesService) => {
    const dish = <Dish>{};

    service.addDishToBasket(dish);
    service.addDishToBasket(dish);

    expect(service.basketDishes.length).toBe(2);
  }));

  it('should get 2 dishes form basket', inject([DishesService], (service: DishesService) => {
    const dish = <Dish>{};

    service.addDishToBasket(dish);
    service.addDishToBasket(dish);

    expect(service.getBasketDishes().length).toBe(2);
  }));


  it('should delete dish form basket', inject([DishesService], (service: DishesService) => {
    const dish = <Dish>{};

    service.addDishToBasket(dish);
    service.addDishToBasket(dish);
    service.addDishToBasket(dish);

    service.deleteFromBasket(1);

    expect(service.basketDishes.length).toBe(2);
  }));

  it('should calculate cost of basket items', inject([DishesService], (service: DishesService) => {
    const dish = <Dish>{
      price: '5'
    };

    service.addDishToBasket(dish);
    service.addDishToBasket(dish);
    service.addDishToBasket(dish);

    expect(service.calculateBasketCost()).toBe(15);
  }));
});
