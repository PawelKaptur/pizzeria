import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MenuComponent} from './menu.component';
import {DishesListItemComponent} from "../dishes-list-item/dishes-list-item.component";
import {LoginService} from "../login/login.service";
import {DishesService} from "./dishes.service";
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent,
        DishesListItemComponent],
      providers: [LoginService,
        DishesService],
      imports: [
        RouterTestingModule,
        HttpClientModule]
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
