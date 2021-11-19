import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  username: string = "";
  userAddress: string = "";
  totalCost: string = "";
  cartItem: string[] = [];
  cartSize: number = 0;
  temp: number = 1;


  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {

    this.username = this.cookieService.get("username");
    this.userAddress = this.cookieService.get("address");
    this.totalCost = this.cookieService.get("totalcost");
    this.cartSize = Number(this.cookieService.get("cartSize"));

    while (this.temp <= this.cartSize) {
      this.cartItem[this.temp] = this.cookieService.get(this.temp.toString());
      ++this.temp;
    }

    if (this.username === '') {
      alert("Please sign in before placing this order");
    }

  }

}
