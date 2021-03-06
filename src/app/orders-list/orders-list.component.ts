import {Component, OnInit} from '@angular/core';
import {Order} from "../models/order.model";
import {OrdersService} from "../services/orders.service";
import {Observable} from "rxjs/internal/Observable";

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  orders$: Observable<Order[]>;
  interval: any;

  constructor(private readonly ordersService: OrdersService) { }

  ngOnInit() {
    this.getOrders();
    this.interval = setInterval(() => {
      this.getOrders();
    }, 20000);
  }

  getOrders(): void{
    this.orders$ = this.ordersService.getOrders();
  }
}
