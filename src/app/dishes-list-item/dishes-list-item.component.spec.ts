import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DishesListItemComponent} from './dishes-list-item.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";


describe('DishesListItemComponent', () => {
  let component: DishesListItemComponent;
  let fixture: ComponentFixture<DishesListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DishesListItemComponent],
      imports: [
        RouterTestingModule,
        HttpClientModule]
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
