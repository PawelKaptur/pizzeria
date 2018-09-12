import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DishListItemDetailsComponent} from './dish-list-item-details.component';
import {DishesService} from "../menu/dishes.service";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

describe('DishListItemDetailsComponent', () => {
  let component: DishListItemDetailsComponent;
  let fixture: ComponentFixture<DishListItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DishListItemDetailsComponent],
      providers: [
        DishesService,
        HttpClient,
        HttpHandler,
        { provide: ActivatedRoute, useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => {
                  return 1;
                }
              }
            },
          }
        },
      ],
      imports: [
        RouterTestingModule
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
