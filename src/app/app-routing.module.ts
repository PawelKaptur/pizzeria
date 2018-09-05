import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DishesListComponent} from "./dishes-list/dishes-list.component";

const routes: Routes = [
  {path: 'dishes-list', component: DishesListComponent},
  {path: '', redirectTo: 'dishes-list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
