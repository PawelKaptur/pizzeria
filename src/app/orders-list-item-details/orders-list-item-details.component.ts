import {Component, OnInit} from '@angular/core';
import {Order} from "../models/order.model";
import {OrdersService} from "../services/orders.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/internal/Subscription";

@Component({
  selector: 'app-orders-list-item-details',
  templateUrl: './orders-list-item-details.component.html',
  styleUrls: ['./orders-list-item-details.component.scss']
})
export class OrdersListItemDetailsComponent implements OnInit {

  order: Order = <Order>{};
  sub: Subscription;

  constructor(private readonly ordersService: OrdersService,
              private readonly route: ActivatedRoute,
              private readonly router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.ordersService.getOrder(+id)
      .subscribe(res => this.order = res);
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

  removeOrder(){
    this.sub = this.ordersService.removeOrderFromDatabase(this.order).subscribe();
    this.router.navigate(['/orders']);
    alert('Order was removed from database.');
  }

}
