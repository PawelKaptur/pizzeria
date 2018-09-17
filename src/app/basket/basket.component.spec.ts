import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BasketComponent} from './basket.component';
import {DishesService} from "../services/dishes.service";
import {HttpClientModule} from "@angular/common/http";
import {Dish} from "../models/dish.model";

describe('BasketComponent', () => {
  let component: BasketComponent;
  let fixture: ComponentFixture<BasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketComponent ],
      providers: [
        DishesService
      ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get basket dishes and return length of two', () => {
    let dish: Dish = <Dish>{};
    let dishes: Dish[];

    dishes = [dish, dish];

    const dishesService = TestBed.get(DishesService);
    const getBasketDishesSpy = spyOn(dishesService, 'getBasketDishes');

    getBasketDishesSpy.and.returnValue(dishes);

    component.getBasketDishes();

    expect(component.dishes.length).toBe(2);
    expect(getBasketDishesSpy).toHaveBeenCalled();
  });

  it('should call calculateBasketCost form DishesService', () => {
    const dishesService = TestBed.get(DishesService);
    const calculateBasketCostSpy = spyOn(dishesService, 'calculateBasketCost');

    calculateBasketCostSpy.and.returnValue(20);

    component.setBasketCost();

    expect(calculateBasketCostSpy).toHaveBeenCalled();
  });

  it('should call deleteFromBasket from DishesService', () => {
    const dishesService = TestBed.get(DishesService);
    const deleteFromBasket = spyOn(dishesService, 'deleteFromBasket');

    component.deleteFromBasket(1);

    expect(deleteFromBasket).toHaveBeenCalled();
  });

});
