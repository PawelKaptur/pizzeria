import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DishesListComponent } from './dishes-list/dishes-list.component';
import { DishesListItemComponent } from './dishes-list-item/dishes-list-item.component';
import {HttpClientModule} from '@angular/common/http';
import { BasketComponent } from './basket/basket.component';

@NgModule({
  declarations: [
    AppComponent,
    DishesListComponent,
    DishesListItemComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
