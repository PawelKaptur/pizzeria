import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddDishComponent} from './add-dish.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

describe('AddDishComponent', () => {
  let component: AddDishComponent;
  let fixture: ComponentFixture<AddDishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddDishComponent],
      imports: [ReactiveFormsModule,
        HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
