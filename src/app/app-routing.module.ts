import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
//import {ProductFormComponent} from "./product-form/product-form.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductGridComponent} from "./product-grid/product-grid.component";
import { UserFormComponent } from './user-form/user-form.component';
import { LoginpageComponent } from './loginpage/loginpage.component';


const routes: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: '',pathMatch: 'full', component: ProductGridComponent},
  {path: 'signup', component: UserFormComponent},
  {path: 'login', component: LoginpageComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
