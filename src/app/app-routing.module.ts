import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
//import {ProductFormComponent} from "./product-form/product-form.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductGridComponent} from "./product-grid/product-grid.component";


const routes: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'main', component: ProductGridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
