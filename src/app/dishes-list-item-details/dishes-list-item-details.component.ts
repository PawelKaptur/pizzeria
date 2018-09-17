import {Component, OnDestroy, OnInit} from '@angular/core';
import {Dish} from "../models/dish.model";
import {DishesService} from "../services/dishes.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs/internal/Subject";

@Component({
  selector: 'app-dish-list-item-details',
  templateUrl: './dishes-list-item-details.component.html',
  styleUrls: ['./dishes-list-item-details.component.scss']
})
export class DishesListItemDetailsComponent implements OnInit, OnDestroy {

  dish: Dish = <Dish>{};
  dishForm: FormGroup;

  private readonly destroy$ = new Subject();

  constructor(private readonly dishesService: DishesService,
              private readonly route: ActivatedRoute,
              private readonly router: Router) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.dishesService.getDish(+id)
      .subscribe(res => {
        this.dish = res;
        if (this.dishForm) {
          this.dishForm.setValue({
            name: res.name,
            description: res.description,
            price: res.price,
            isAvailable: res.isAvailable,
            type: res.type
          })
        }
      });

    this.makeForm();
  }

  makeForm() {
    this.dishForm = new FormGroup({
      'name': new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      'description': new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      'price': new FormControl('', [
        Validators.required,
        Validators.min(0.01)
      ]),
      'isAvailable': new FormControl(),
      'type': new FormControl()
    });
  }

  /*  changeAvailabilityOfDish() {
      this.dish.isAvailable = !this.dish.isAvailable;
      this.dishesService.changeAvailabilityOfDish(this.dish).pipe(takeUntil(this.destroy$)).subscribe();
    }*/

  deleteDish() {
    this.dishesService.deleteDishFromDatabase(this.dish).pipe(takeUntil(this.destroy$)).subscribe();
    this.router.navigate(['/']);
    alert('The dish was removed from database.');
  }

  editDish() {
    let dishId = this.dish.id;
    this.dish = this.dishForm.value;
    this.dish.id = dishId;

    if (this.dishForm.get('isAvailable').value === 'true') {
      this.dish.isAvailable = true;
    } else {
      this.dish.isAvailable = false;
    }

    this.dishesService.editDish(this.dish).pipe(takeUntil(this.destroy$)).subscribe();
    alert('Dish was edited.');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
