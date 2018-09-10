import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DishesListComponent } from './dishes-list/dishes-list.component';
import { DishesListItemComponent } from './dishes-list-item/dishes-list-item.component';
import {HttpClientModule} from '@angular/common/http';
import { BasketComponent } from './basket/basket.component';
import { AddressComponent } from './address/address.component';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DishListItemDetailsComponent } from './dish-list-item-details/dish-list-item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DishesListComponent,
    DishesListItemComponent,
    BasketComponent,
    AddressComponent,
    DishListItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
