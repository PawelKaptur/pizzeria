import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MenuComponent} from './menu.component';
import {DishesListItemComponent} from "../dishes-list-item/dishes-list-item.component";
import {AppRoutingModule} from "../app-routing.module";
import {LoginService} from "../login/login.service";
import {DishesService} from "./dishes.service";
import {BasketComponent} from "../basket/basket.component";
import {AddressComponent} from "../address/address.component";
import {DishListItemDetailsComponent} from "../dishes-list-item-details/dish-list-item-details.component";
import {OrdersListItemDetailsComponent} from "../orders-list-item-details/orders-list-item-details.component";
import {OrdersListComponent} from "../orders-list/orders-list.component";
import {LoginComponent} from "../login/login.component";
import {ReactiveFormsModule} from "@angular/forms";
import {OrdersListItemComponent} from "../orders-list-item/orders-list-item.component";

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent,
        DishesListItemComponent,
        BasketComponent,
        AddressComponent,
        DishListItemDetailsComponent,
        OrdersListComponent,
        OrdersListItemDetailsComponent,
        LoginComponent,
        OrdersListItemComponent],
      providers: [LoginService,
        DishesService],
      imports: [AppRoutingModule,
      ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
