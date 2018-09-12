import {Component, OnInit} from '@angular/core';
import {Order} from "../models/order.model";
import {OrdersService} from "./orders.service";
import {Observable} from "rxjs/internal/Observable";

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  orders$: Observable<Order[]>;

  constructor(readonly ordersService: OrdersService) { }

  ngOnInit() {
    this.orders$ = this.ordersService.getOrders();
  }

}
