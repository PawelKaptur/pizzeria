import {inject, TestBed} from '@angular/core/testing';

import {DishesService} from './dishes.service';
import {HttpClientModule} from "@angular/common/http";
import {Dish} from "../models/dish.model";

describe('DishesService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DishesService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([DishesService], (service: DishesService) => {
    expect(service).toBeTruthy();
  }));
});
