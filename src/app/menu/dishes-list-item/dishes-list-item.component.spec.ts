import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DishesListItemComponent} from './dishes-list-item.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {DishesService} from "../../services/dishes.service";
import {LoginService} from "../../services/login.service";
import {Dish} from "../../models/dish.model";
import {of} from "rxjs/internal/observable/of";
import {BasketService} from "../../services/basket.service";


describe('DishesListItemComponent', () => {
  let component: DishesListItemComponent;
  let fixture: ComponentFixture<DishesListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DishesListItemComponent],
      providers: [DishesService,
        LoginService],
      imports: [
        RouterTestingModule,
        HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call addDishToBasket from BasketService', () => {
    let dish: Dish = <Dish>{};
    const basketService = TestBed.get(BasketService);
    const addDishToBasket = spyOn(basketService, 'addDishToBasket');

    component.addItemToBasket();

    expect(addDishToBasket).toHaveBeenCalledWith(dish);
  });

  it('should change availability of dish to true', () => {
    let dish: Dish = <Dish>{isAvailable: false};
    const dishesService = TestBed.get(DishesService);
    const changeAvailabilitySpy = spyOn(dishesService, 'changeAvailabilityOfDish');

    changeAvailabilitySpy.and.returnValue(of([]));

    component.dish = dish;
    component.changeAvailabilityOfDish();

    expect(component.dish.isAvailable).toBe(true);
    expect(changeAvailabilitySpy).toHaveBeenCalled();
  });
});
