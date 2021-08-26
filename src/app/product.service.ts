import { Injectable } from '@angular/core';
import {Product} from "./product";
import {Observable} from "rxjs";
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly productUrl:string;

  constructor(private http:HttpClient) {
    this.productUrl = "http://localhost:8080/product";
  }

  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
}

  public save(product:Product): Observable<Product> {
    console.log("Inside ProductService save(Product)");
    console.log("LOGGING PRODUCT DETAILS of Save(Product)");
    console.log("++++++++++++++++++++++++++++++++++++++++");
    console.log(product.p_id);
    console.log(product.p_name);
    console.log(product.p_image);
    console.log(product.p_instock);
    console.log(product.p_description);
    console.log("END OF PRODUCT DETAILS");
    //return this.http.post<Product>(this.productUrl,{"p_name":"Vanilla Cream Rolls", "p_description":"Most creamy rolls in Town",
    //"p_image":"/assets/images/food/rolls.jpg", "p_instock":"true"});

    return this.http.post<Product>(this.productUrl,product);
  }

}
