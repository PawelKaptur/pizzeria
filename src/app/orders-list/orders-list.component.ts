import { Component, OnInit } from '@angular/core';
import {Order} from "../models/order.model";
import {OrdersService} from "./orders.service";
import {Subscription} from "rxjs/internal/Subscription";
import {RoleGuard} from "../guards/RoleGuard";

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  orders: Order[];
  sub: Subscription;

  constructor(readonly ordersService: OrdersService) { }

  ngOnInit() {
    this.sub = this.ordersService.getOrders().subscribe(res => this.orders = res);
  }

}
