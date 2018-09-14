import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Order} from "../models/order.model";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private readonly http: HttpClient) { }

  createOrder(order: Order): Observable<Order>{
    return this.http.post<Order>('/api/orders', order);
  }

  getOrders(): Observable<Order[]>{
    return this.http.get<Order[]>('/api/orders');
  }

  getOrder(id: number): Observable<Order>{
    return this.http.get<Order>(`/api/orders/${id}`);
  }

  changeStatusOfOrder(order: Order): Observable<Order>{
    return this.http.put<Order>(`/api/orders/${order.id}`, order);
  }

  removeOrderFromDatabase(order: Order) {
    return this.http.delete<Order>(`/api/orders/${order.id}`);
  }
}
