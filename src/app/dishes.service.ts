import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Dish} from './models/dish.model';
import {Observable} from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DishesService {

  basketDishes: Dish[];

  constructor(readonly http: HttpClient) {
    this.basketDishes = [];
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

  getBasketDishes(){
    return this.basketDishes;
  }

  addDishToBasket(dish: Dish){
    this.basketDishes.push(dish);
  }

/*  deleteFromBasket(dish: Dish){
    //alert(this.basketDishes.length);
    this.basketDishes.splice(dish.id, 1);
  }*/

  deleteFromBasket(index: number){
    //alert(this.basketDishes.length);
    this.basketDishes.splice(index, 1);
  }

  getDish(id: number): Observable<Dish> {
    return this.http.get<Dish>(`/api/dishes/${id}`);
  }
}
