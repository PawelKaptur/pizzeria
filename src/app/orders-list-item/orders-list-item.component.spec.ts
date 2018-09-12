import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersListItemComponent } from './orders-list-item.component';
import {AppRoutingModule} from "../app-routing.module";

describe('OrdersListItemComponent', () => {
  let component: OrdersListItemComponent;
  let fixture: ComponentFixture<OrdersListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersListItemComponent ],
      imports: [AppRoutingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
