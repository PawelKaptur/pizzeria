import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DishesListItemDetailsComponent} from './dishes-list-item-details.component';
import {DishesService} from "../menu/dishes.service";
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {Dish} from "../models/dish.model";

describe('DishesListItemDetailsComponent', () => {
  let component: DishesListItemDetailsComponent;
  let fixture: ComponentFixture<DishesListItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DishesListItemDetailsComponent],
      providers: [
        DishesService,
      ],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesListItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change availability of dish to true', () => {
    let dish: Dish = <Dish>{isAvailable: false};
    component.dish = dish;
    component.changeAvailabilityOfDish();
    expect(dish.isAvailable).toBe(true);
  });
});
