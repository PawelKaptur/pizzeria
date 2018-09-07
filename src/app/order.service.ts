import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Order} from "./models/order.model";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(readonly http: HttpClient) { }

  createOrder(order: Order): Observable<Order>{
    return this.http.post<Order>('/api/orders', order);
  }
}
