import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
//import {ProductFormComponent} from "./product-form/product-form.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductGridComponent} from "./product-grid/product-grid.component";
import { UserFormComponent } from './user-form/user-form.component';


const routes: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'main', component: ProductGridComponent},
  {path: 'signup', component: UserFormComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
