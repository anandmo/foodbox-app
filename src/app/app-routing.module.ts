import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
//import {ProductFormComponent} from "./product-form/product-form.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductGridComponent} from "./product-grid/product-grid.component";
import { UserFormComponent } from './user-form/user-form.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppComponent } from './app.component';
import { AdminportalComponent } from './adminportal/adminportal.component';
import { ProductFormComponent } from './product-form/product-form.component';


const routes: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: '',pathMatch: 'full', component: ProductGridComponent},
  {path: 'signup', component: UserFormComponent},
  {path: 'login', component: LoginpageComponent},
  {path: 'about', component: AboutusComponent},
  {path: 'home', component: ProductGridComponent},
  {path: 'admin', component: AdminportalComponent},
  {path: 'addproduct', component: ProductFormComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
