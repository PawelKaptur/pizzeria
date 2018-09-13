import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrdersListComponent} from './orders-list.component';
import {OrdersService} from "./orders.service";
import {OrdersListItemComponent} from "../orders-list-item/orders-list-item.component";
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";

describe('OrdersListComponent', () => {
  let component: OrdersListComponent;
  let fixture: ComponentFixture<OrdersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersListComponent,
        OrdersListItemComponent,
      ],
      providers: [
        OrdersService,
      ],
      imports: [
        RouterTestingModule,
        HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
