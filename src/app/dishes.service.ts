import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Dish} from './models/dish.model';
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
}
