import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent implements OnInit {

  username: String = "";
  buttoninfo: String = "Sign-in";

  constructor(private cookieService: CookieService, private router: Router) { }

  onSubmit() {

    if (this.username === "") {
      this.router.navigate(['/login']);
    } else {
      this.cookieService.deleteAll();
      window.location.reload();
    }



  }

  ngOnInit(): void {
    this.username = this.cookieService.get("username");
    if (this.username === "") {
      this.buttoninfo = "Sign-in";
    } else {
      this.buttoninfo = "Sign-out";
    }
  }

}
