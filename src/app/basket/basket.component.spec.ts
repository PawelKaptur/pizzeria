import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BasketComponent} from './basket.component';
import {DishesService} from "../menu/dishes.service";
import {HttpClientModule} from "@angular/common/http";

describe('BasketComponent', () => {
  let component: BasketComponent;
  let fixture: ComponentFixture<BasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketComponent ],
      providers: [
        DishesService
      ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
