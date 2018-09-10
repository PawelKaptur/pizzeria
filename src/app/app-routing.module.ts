import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DishesListComponent} from "./dishes-list/dishes-list.component";
import {BasketComponent} from "./basket/basket.component";
import {AddressComponent} from "./address/address.component";
import {DishListItemDetailsComponent} from "./dish-list-item-details/dish-list-item-details.component";


const routes: Routes = [
  {path: 'dishes-list', component: DishesListComponent},
  {path: '', redirectTo: 'dishes-list', pathMatch: 'full'},
  {path: 'basket', component: BasketComponent},
  {path: 'summary', component: AddressComponent},
  {path: 'dishes/:id', component: DishListItemDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
