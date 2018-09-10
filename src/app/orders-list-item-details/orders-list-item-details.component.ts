import { Component, OnInit } from '@angular/core';
import {Order} from "../models/order.model";
import {OrdersService} from "../orders.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-orders-list-item-details',
  templateUrl: './orders-list-item-details.component.html',
  styleUrls: ['./orders-list-item-details.component.scss']
})
export class OrdersListItemDetailsComponent implements OnInit {

  order: Order;

  constructor(readonly ordersService: OrdersService,
              readonly route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.ordersService.getOrder(+id).subscribe(res => this.order = res);
  }
}
