import { Injectable } from '@angular/core';
import {Product} from "./product";
import {Observable} from "rxjs";
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl:string;

  constructor(private http:HttpClient) {
    this.productUrl = "http://localhost:8080/product";
  }

  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
}

}
