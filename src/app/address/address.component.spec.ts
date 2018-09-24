import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddressComponent} from './address.component';
import {OrdersService} from "../services/orders.service";
import {ReactiveFormsModule} from "@angular/forms";
import {BasketComponent} from "../basket/basket.component";
import {HttpClientModule} from "@angular/common/http";
import {Order} from "../models/order.model";
import {of} from "rxjs/internal/observable/of";
import {BasketService} from "../services/basket.service";

describe('AddressComponent', () => {
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddressComponent,
        BasketComponent],
      providers: [
        OrdersService,
        BasketService
      ],
      imports: [ReactiveFormsModule,
        HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create order', () => {
    let order: Order = <Order>{};

    const orderService = TestBed.get(OrdersService);
    const createOrderSpy = spyOn(orderService, 'createOrder');

    createOrderSpy.and.returnValue(of([]));

    component.order = order;
    component.createOrder();

    expect(component.order.date);
    expect(component.order.state).toBe("Accepted");
    expect(createOrderSpy).toHaveBeenCalled();
  });

  it('should have two object in dishesIds', () => {
    const basketService = TestBed.get(BasketService);
    const getBasketDishesSpy = spyOn(basketService, 'getBasketDishes');

    getBasketDishesSpy.and.returnValue(of([], []));

    component.getDishes();

    expect(getBasketDishesSpy).toHaveBeenCalled();
    expect(component.dishesIds.length).toBe(2);
  });
});
