import {inject, TestBed} from '@angular/core/testing';

import {BasketService} from './basket.service';
import {Dish} from "../models/dish.model";

describe('BasketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BasketService]
    });
  });

  it('should be created', inject([BasketService], (service: BasketService) => {
    expect(service).toBeTruthy();
  }));

  it('should add dish form basket', inject([BasketService], (service: BasketService) => {
    const dish = <Dish>{};

    service.addDishToBasket(dish);
    service.addDishToBasket(dish);

    expect(service.basketDishes.length).toBe(2);
  }));

  it('should get 2 dishes form basket', inject([BasketService], (service: BasketService) => {
    const dish = <Dish>{};

    service.basketDishes = [dish, dish];

    expect(service.getBasketDishes().length).toBe(2);
  }));


  it('should delete dish form basket', inject([BasketService], (service: BasketService) => {
    const dish = <Dish>{};

    service.basketDishes = [dish, dish, dish];
    service.deleteFromBasket(1);

    expect(service.basketDishes.length).toBe(2);
  }));

  it('should calculate cost of basket items', inject([BasketService], (service: BasketService) => {
    const dish = <Dish>{
      price: 5
    };

    service.basketDishes = [dish, dish, dish];

    expect(service.calculateBasketCost()).toBe(15);
  }));
});
