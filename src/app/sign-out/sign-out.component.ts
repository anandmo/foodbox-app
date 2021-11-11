import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent implements OnInit {

  constructor(private cookieService: CookieService) { }

  onSubmit() {

    this.cookieService.deleteAll();
    window.location.reload();


  }

  ngOnInit(): void {
  }

}
