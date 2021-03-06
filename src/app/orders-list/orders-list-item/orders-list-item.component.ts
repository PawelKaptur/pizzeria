import {Component, Input, OnInit} from '@angular/core';
import {Order} from "../../models/order.model";


@Component({
  selector: 'app-orders-list-item',
  templateUrl: './orders-list-item.component.html',
  styleUrls: ['./orders-list-item.component.scss']
})
export class OrdersListItemComponent implements OnInit {

  @Input() order: Order = <Order>{};

  constructor() { }

  ngOnInit() {
  }

}
