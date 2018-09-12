import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DishesListItemComponent} from './dishes-list-item.component';
import {AppRoutingModule} from "../app-routing.module";
import {MenuComponent} from "../menu/menu.component";
import {BasketComponent} from "../basket/basket.component";
import {AddressComponent} from "../address/address.component";
import {DishListItemDetailsComponent} from "../dishes-list-item-details/dish-list-item-details.component";

describe('DishesListItemComponent', () => {
  let component: DishesListItemComponent;
  let fixture: ComponentFixture<DishesListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DishesListItemComponent,
        MenuComponent,
        BasketComponent,
        AddressComponent,
        DishListItemDetailsComponent],
      providers: [],
      imports: [AppRoutingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
