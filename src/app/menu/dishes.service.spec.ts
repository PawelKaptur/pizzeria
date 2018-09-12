import { TestBed, inject } from '@angular/core/testing';

import { DishesService } from './dishes.service';
import {HttpClient, HttpHandler} from "@angular/common/http";
import {Dish} from "../models/dish.model";

describe('DishesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DishesService,
      HttpClient,
      HttpHandler]
    });
  });

  it('should be created', inject([DishesService], (service: DishesService) => {
    expect(service).toBeTruthy();
  }));

/*  it('should get dishes', inject([DishesService], (service: DishesService) => {
    const dishes = [{},{},{},{},{}];
    spyOn(service, "getDishes").and.returnValue(dishes);
    expect(service.getDishes.length).toBe(5);
  }));*/

/*  it('should get 3 dishes from basket', inject([DishesService], (service: DishesService) => {
    const dish = <Dish>{};
    const basketDish = [dish,dish,dish];
    //spyOn(service, "basketDishes").and.returnValue(basketDish);

    spyOn(service, "getBasketDishes").and.returnValue(basketDish);
    expect(service.getBasketDishes()).toBe(basketDish);
  }));*/

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
