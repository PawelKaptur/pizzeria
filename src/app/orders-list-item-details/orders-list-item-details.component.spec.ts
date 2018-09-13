import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrdersListItemDetailsComponent} from './orders-list-item-details.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";


describe('OrdersListItemDetailsComponent', () => {
  let component: OrdersListItemDetailsComponent;
  let fixture: ComponentFixture<OrdersListItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersListItemDetailsComponent],
      imports: [HttpClientModule,
        RouterTestingModule]
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
