import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../product.service";
// import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product:Product;
  constructor(
    // private route: ActivatedRoute,
    // private router: Router,
    private productService: ProductService
  ) {
    this.product = new Product();
  }

  onSubmit() {
   // console.log(this.product.p_name);
    this.productService.save(this.product).subscribe();
  }

  ngOnInit(): void {
  }

}
