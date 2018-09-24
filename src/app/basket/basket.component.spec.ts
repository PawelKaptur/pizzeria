import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BasketComponent} from './basket.component';
import {DishesService} from "../services/dishes.service";
import {HttpClientModule} from "@angular/common/http";
import {Dish} from "../models/dish.model";
import {BasketService} from "../services/basket.service";

describe('BasketComponent', () => {
  let component: BasketComponent;
  let fixture: ComponentFixture<BasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketComponent ],
      providers: [
        BasketService
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

    const basketService = TestBed.get(BasketService);
    const getBasketDishesSpy = spyOn(basketService, 'getBasketDishes');

    getBasketDishesSpy.and.returnValue(dishes);

    component.getBasketDishes();

    expect(component.dishes.length).toBe(2);
    expect(getBasketDishesSpy).toHaveBeenCalled();
  });

  it('should call calculateBasketCost form BasketService', () => {
    const basketService = TestBed.get(BasketService);
    const calculateBasketCostSpy = spyOn(basketService, 'calculateBasketCost');

    calculateBasketCostSpy.and.returnValue(20);

    component.setBasketCost();

    expect(calculateBasketCostSpy).toHaveBeenCalled();
  });

  it('should call deleteFromBasket from BasketService', () => {
    const basketSetvice = TestBed.get(BasketService);
    const deleteFromBasket = spyOn(basketSetvice, 'deleteFromBasket');

    component.deleteFromBasket(1);

    expect(deleteFromBasket).toHaveBeenCalled();
  });

});
