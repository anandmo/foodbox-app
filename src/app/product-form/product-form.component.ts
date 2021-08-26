import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent { //implements OnInit {

  product:Product;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {
    this.product = new Product();
  }

  onSubmit() {
    console.log("LOGGING PRODUCT DETAILS");
    console.log("++++++++++++++++++++++++");
    console.log(this.product.p_id);
    console.log(this.product.p_name);
    console.log(this.product.p_image);
    console.log(this.product.p_instock);
    console.log(this.product.p_description);
    console.log("END OF PRODUCT DETAILS");
    console.log("ProductService save(Product) method is called");
    this.productService.save(this.product).subscribe(() => this.gotoProductList());
  }

  gotoProductList() {
    console.log("INSIDE gotoProductList");
    this.router.navigate(['/products']).then(() => {
      console.log("REDIRECTED TO /products");
    });
  }

  // ngOnInit(): void {
  // }

}
