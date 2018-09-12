import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrdersListItemDetailsComponent} from './orders-list-item-details.component';
import {HttpClient, HttpHandler} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

describe('OrdersListItemDetailsComponent', () => {
  let component: OrdersListItemDetailsComponent;
  let fixture: ComponentFixture<OrdersListItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersListItemDetailsComponent],
      providers: [HttpClient,
        HttpHandler,
        ActivatedRoute],
      imports: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersListItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
