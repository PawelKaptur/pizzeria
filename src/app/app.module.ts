import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DishesListItemComponent} from './menu/dishes-list-item/dishes-list-item.component';
import {HttpClientModule} from '@angular/common/http';
import {BasketComponent} from './basket/basket.component';
import {AddressComponent} from './address/address.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {DishesListItemDetailsComponent} from './menu/dishes-list-item-details/dishes-list-item-details.component';
import {OrdersListComponent} from './orders-list/orders-list.component';
import {OrdersListItemComponent} from './orders-list/orders-list-item/orders-list-item.component';
import {OrdersListItemDetailsComponent} from './orders-list/orders-list-item-details/orders-list-item-details.component';
import {LoginComponent} from './login/login.component';
import {MenuComponent} from './menu/menu.component';
import {RouteGuard} from "./guards/RouteGuard";
import { AddDishComponent } from './menu/add-dish/add-dish.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    DishesListItemComponent,
    BasketComponent,
    AddressComponent,
    DishesListItemDetailsComponent,
    OrdersListComponent,
    OrdersListItemComponent,
    OrdersListItemDetailsComponent,
    LoginComponent,
    MenuComponent,
    AddDishComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
