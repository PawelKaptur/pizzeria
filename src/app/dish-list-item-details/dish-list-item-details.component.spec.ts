import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishListItemDetailsComponent } from './dish-list-item-details.component';

describe('DishListItemDetailsComponent', () => {
  let component: DishListItemDetailsComponent;
  let fixture: ComponentFixture<DishListItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishListItemDetailsComponent ]
    })
    .compileComponents();
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
