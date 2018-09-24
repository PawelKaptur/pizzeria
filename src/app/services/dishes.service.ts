import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Dish} from '../models/dish.model';
import {Observable} from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DishesService {

  constructor(readonly http: HttpClient) {

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

  getDish(id: number): Observable<Dish> {
    return this.http.get<Dish>(`/api/dishes/${id}`);
  }

  changeAvailabilityOfDish(dish: Dish): Observable<Dish> {
    return this.http.put<Dish>(`/api/dishes/${dish.id}`, dish);
  }

  addDish(dish: Dish): Observable<Dish> {
    return this.http.post<Dish>('/api/dishes', dish);
  }

  deleteDishFromDatabase(dish: Dish) {
    return this.http.delete<Dish>(`/api/dishes/${dish.id}`);
  }

  editDish(dish: Dish) {
    return this.http.put<Dish>(`/api/dishes/${dish.id}`, dish);
  }
}
