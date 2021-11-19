import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Product } from "../product";
import { ProductService } from "../product.service";

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {

  products: Product[] = [];
  //selectedOption: string = '';
  selectedOption: string = '';
  selectedProduct: string = '';
  selectedProductCost: string = '';
  totalCost: number = 0;
  index: number = 1;

  constructor(private productService: ProductService, private cookieService: CookieService) { }

  onSubmit() {

    if (this.selectedProduct === '' || this.selectedProduct === '') {
      alert("Please add valid details");
      return
    }

    console.log(this.selectedOption);
    console.log(this.selectedProduct);
    console.log(this.selectedProductCost);

    this.totalCost = this.totalCost + Number(this.selectedOption);

    console.log(this.totalCost);

    this.cookieService.set("totalcost", this.totalCost.toString());
    this.cookieService.set(this.selectedProduct, this.selectedOption.toString());

    this.cookieService.set(this.index.toString(), this.selectedProduct + "-" + this.selectedOption.toString() + " Rs");

    this.cookieService.set("cartSize", this.index.toString());
    ++this.index;

    alert("Added to cart successfully");
    this.selectedOption = '';
    this.selectedProduct = '';



  }

  ngOnInit(): void {
    this.productService.findAll().subscribe(data => { this.products = data; });
  }

}
