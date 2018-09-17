import {inject, TestBed} from '@angular/core/testing';

import {OrdersService} from './orders.service';
import {HttpClientModule} from "@angular/common/http";

describe('OrdersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrdersService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([OrdersService], (service: OrdersService) => {
    expect(service).toBeTruthy();
  }));
});
