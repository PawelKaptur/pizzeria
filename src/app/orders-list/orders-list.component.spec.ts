import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrdersListComponent} from './orders-list.component';
import {OrdersListItemComponent} from "../orders-list-item/orders-list-item.component";
import {AppRoutingModule} from "../app-routing.module";
import {OrdersService} from "./orders.service";

describe('OrdersListComponent', () => {
  let component: OrdersListComponent;
  let fixture: ComponentFixture<OrdersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersListComponent,
        OrdersListItemComponent],
      providers: [
        OrdersService
      ],
      imports: [AppRoutingModule]
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
