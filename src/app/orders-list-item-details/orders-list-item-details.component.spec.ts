import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersListItemDetailsComponent } from './orders-list-item-details.component';

describe('OrdersListItemDetailsComponent', () => {
  let component: OrdersListItemDetailsComponent;
  let fixture: ComponentFixture<OrdersListItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersListItemDetailsComponent ]
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
