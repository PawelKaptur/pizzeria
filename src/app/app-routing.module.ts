import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DishesListComponent} from "./dishes-list/dishes-list.component";
import {BasketComponent} from "./basket/basket.component";
import {AddressComponent} from "./address/address.component";
import {DishListItemDetailsComponent} from "./dishes-list-item-details/dish-list-item-details.component";
import {OrdersListComponent} from "./orders-list/orders-list.component";


const routes: Routes = [
  {path: 'dishes-list', component: DishesListComponent},
  {path: '', redirectTo: 'dishes-list', pathMatch: 'full'},
  {path: 'basket', component: BasketComponent},
  {path: 'summary', component: AddressComponent},
  {path: 'dishes/:id', component: DishListItemDetailsComponent},
  {path: 'orders-list', component: OrdersListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
