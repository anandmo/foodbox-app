import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import {HttpClientModule} from "@angular/common/http";
import {ProductService} from "./product.service";
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductFormComponent } from './product-form/product-form.component';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { UserFormComponent } from './user-form/user-form.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminportalComponent } from './adminportal/adminportal.component';
import { AddtocartComponent } from './addtocart/addtocart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductGridComponent,
    ProductFormComponent,
    UserFormComponent,
    LoginpageComponent,
    NavBarComponent,
    AboutusComponent,
    AdminportalComponent,
    AddtocartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})

export class AppModule { }
