import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user-title',
  templateUrl: './user-title.component.html',
  styleUrls: ['./user-title.component.css']
})
export class UserTitleComponent implements OnInit {
  usernameCookie: string = "";
  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.usernameCookie = this.cookieService.get('username');
    
    if(this.usernameCookie.length === 0){
      this.usernameCookie = "User";
    } 

    

  }

}
