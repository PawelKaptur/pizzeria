import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddressComponent} from './address.component';
import {OrdersService} from "../orders-list/orders.service";
import {DishesService} from "../menu/dishes.service";
import {ReactiveFormsModule} from "@angular/forms";
import {BasketComponent} from "../basket/basket.component";
import {HttpClientModule} from "@angular/common/http";


describe('AddressComponent', () => {
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddressComponent,
        BasketComponent],
      providers: [
        OrdersService,
        DishesService
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
});
