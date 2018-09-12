import { Component, OnInit } from '@angular/core';
import {Order} from "../models/order.model";
import {OrdersService} from "../orders-list/orders.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/internal/Subscription";

@Component({
  selector: 'app-orders-list-item-details',
  templateUrl: './orders-list-item-details.component.html',
  styleUrls: ['./orders-list-item-details.component.scss']
})
export class OrdersListItemDetailsComponent implements OnInit {

  order: Order = <Order>{};
  sub: Subscription;

  constructor(readonly ordersService: OrdersService,
              readonly route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.ordersService.getOrder(+id).subscribe(res => this.order = res);
  }

  changeStatusOfOrderToAccepted(){
    this.order.state = 'Accepted';
    this.sub = this.ordersService.changeStatusOfOrder(this.order).subscribe();
  }

  changeStatusOfOrderToSend(){
    this.order.state = 'Send';
    this.sub = this.ordersService.changeStatusOfOrder(this.order).subscribe();
  }

  changeStatusOfOrderToDelivered(){
    this.order.state = 'Delivered';
    this.sub = this.ordersService.changeStatusOfOrder(this.order).subscribe();
  }

}
