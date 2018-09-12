import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Dish} from '../models/dish.model';
import {Observable} from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DishesService {

  basketDishes: Dish[];
  basketCost: number;

  constructor(readonly http: HttpClient) {
    this.basketDishes = [];
    this.basketCost = 0;
  }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>('/api/dishes');
  }

  getPizza(): Observable<Dish[]> {
    return this.http.get<Dish[]>('/api/dishes/?type=pizza');
  }

  getPasta(): Observable<Dish[]> {
    return this.http.get<Dish[]>('/api/dishes/?type=pasta');
  }

  getBeverage(): Observable<Dish[]> {
    return this.http.get<Dish[]>('/api/dishes/?type=beverage');
  }

  getBasketDishes(): Dish[]{
    return this.basketDishes;
  }

  addDishToBasket(dish: Dish): void{
    this.basketDishes.push(dish);
    this.calculateBasketCost();
  }

  calculateBasketCost(): number{
    this.basketCost = 0;
    this.basketDishes.forEach(dish => this.basketCost+= parseFloat(dish.price));
    return this.basketCost;
  }

  deleteFromBasket(index: number): void{
    this.basketDishes.splice(index, 1);
    this.calculateBasketCost();
  }

  getDish(id: number): Observable<Dish> {
    return this.http.get<Dish>(`/api/dishes/${id}`);
  }

  changeAvailabilityOfDish(dish: Dish): Observable<Dish> {
    return this.http.put<Dish>(`/api/dishes/${dish.id}`, dish);
  }
}