import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DishListItemDetailsComponent} from './dish-list-item-details.component';
import {DishesService} from "../menu/dishes.service";
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";

describe('DishListItemDetailsComponent', () => {
  let component: DishListItemDetailsComponent;
  let fixture: ComponentFixture<DishListItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DishListItemDetailsComponent],
      providers: [
        DishesService,
      ],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishListItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
