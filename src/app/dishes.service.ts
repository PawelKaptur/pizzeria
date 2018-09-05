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

  getDish(id: number): Observable<Dish> {
    return this.http.get<Dish>(`/api/dishes/${id}`);
  }
}
