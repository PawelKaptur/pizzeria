import {Component, OnDestroy, OnInit} from '@angular/core';
import {Order} from "../models/order.model";
import {OrdersService} from "../services/orders.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subject} from "rxjs/internal/Subject";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-orders-list-item-details',
  templateUrl: './orders-list-item-details.component.html',
  styleUrls: ['./orders-list-item-details.component.scss']
})
export class OrdersListItemDetailsComponent implements OnInit, OnDestroy {

  private readonly destroy$ = new Subject();

  order: Order = <Order>{};

  constructor(private readonly ordersService: OrdersService,
              private readonly route: ActivatedRoute,
              private readonly router: Router) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.ordersService.getOrder(+id)
      .subscribe(res => this.order = res);
  }

  changeStatusOfOrderToAccepted() {
    this.order.state = 'Accepted';
    this.ordersService.changeStatusOfOrder(this.order).pipe(takeUntil(this.destroy$)).subscribe();
  }

  changeStatusOfOrderToSend() {
    this.order.state = 'Send';
    this.ordersService.changeStatusOfOrder(this.order).pipe(takeUntil(this.destroy$)).subscribe();
  }

  changeStatusOfOrderToDelivered() {
    this.order.state = 'Delivered';
    this.ordersService.changeStatusOfOrder(this.order).pipe(takeUntil(this.destroy$)).subscribe();
  }

  removeOrder() {
    this.ordersService.removeOrderFromDatabase(this.order).pipe(takeUntil(this.destroy$)).subscribe();
    this.router.navigate(['/orders']);
    alert('Order was removed from database.');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
