import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {OrderService} from "../order.service";
import {Subscription} from "rxjs/internal/Subscription";
import {Order} from "../models/order.model";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  sub: Subscription;
  order: Order;

  angularForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    telephone: new FormControl(),
    email: new FormControl(),
    city: new FormControl(),
    street: new FormControl()
  });

  constructor(readonly service: OrderService) { }

  ngOnInit() {
  }

  createOrder(): void {
    alert(this.order);
    this.sub = this.service.createOrder(this.order).subscribe();
  }
}
