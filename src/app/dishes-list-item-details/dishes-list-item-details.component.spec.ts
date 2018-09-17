import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DishesListItemDetailsComponent} from './dishes-list-item-details.component';
import {DishesService} from "../services/dishes.service";
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {ReactiveFormsModule} from "@angular/forms";
import {OrdersService} from "../services/orders.service";
import {of} from "rxjs/internal/observable/of";

describe('DishesListItemDetailsComponent', () => {
  let component: DishesListItemDetailsComponent;
  let fixture: ComponentFixture<DishesListItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DishesListItemDetailsComponent],
      providers: [
        DishesService,
      ],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        ReactiveFormsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesListItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call deleteDishFromDatabase from dishes service', () => {
    let dishesService = TestBed.get(DishesService);
    let removeDishSpy = spyOn(dishesService, 'deleteDishFromDatabase');

    removeDishSpy.and.returnValue(of([]));

    component.deleteDish();

    expect(removeDishSpy).toHaveBeenCalled();
  });
});
