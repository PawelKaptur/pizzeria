import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrdersListItemDetailsComponent} from './orders-list-item-details.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {OrdersService} from "../services/orders.service";
import {of} from "rxjs/internal/observable/of";


describe('OrdersListItemDetailsComponent', () => {
  let component: OrdersListItemDetailsComponent;
  let fixture: ComponentFixture<OrdersListItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersListItemDetailsComponent],
      imports: [HttpClientModule,
        RouterTestingModule],
      providers:[OrdersService]
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

  it('should call removeOrderFromDatabase method from orders service', () => {
    let ordersService = TestBed.get(OrdersService);
    let removeOrderSpy = spyOn(ordersService, 'removeOrderFromDatabase');

    removeOrderSpy.and.returnValue(of([]));

    component.removeOrder();

    expect(removeOrderSpy).toHaveBeenCalled();
  });
});
