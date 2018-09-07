import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DishesListComponent} from "./dishes-list/dishes-list.component";
import {BasketComponent} from "./basket/basket.component";
import {AddressComponent} from "./address/address.component";


const routes: Routes = [
  {path: 'dishes-list', component: DishesListComponent},
  {path: '', redirectTo: 'dishes-list', pathMatch: 'full'},
  {path: 'basket', component: BasketComponent},
  {path: 'summary', component: AddressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
