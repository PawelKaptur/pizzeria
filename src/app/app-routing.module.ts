import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BasketComponent} from "./basket/basket.component";
import {AddressComponent} from "./address/address.component";
import {DishesListItemDetailsComponent} from "./dishes-list-item-details/dishes-list-item-details.component";
import {OrdersListComponent} from "./orders-list/orders-list.component";
import {OrdersListItemDetailsComponent} from "./orders-list-item-details/orders-list-item-details.component";
import {LoginComponent} from "./login/login.component";
import {MenuComponent} from "./menu/menu.component";
import {RouteGuard} from "./guards/RouteGuard";


const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'summary', component: AddressComponent},
  {path: 'dishes/:id', component: DishesListItemDetailsComponent, canActivate: [RouteGuard]},
  {path: 'orders', component: OrdersListComponent, canActivate: [RouteGuard]},
  {path: 'orders/:id', component: OrdersListItemDetailsComponent, canActivate: [RouteGuard]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
