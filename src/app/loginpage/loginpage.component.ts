import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CookieService } from 'ngx-cookie-service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  user: User;

  constructor(private router: Router, private userService: UserService, private cookieService: CookieService) {
    this.user = new User();

  }

  onSubmit() {
    //console.log("INTIAL LOG DETECT", this.user.u_email) ; 
    
    this.userService.verifyLogin(this.user).subscribe(data => { this.user = data;
     
      //this.user is been used now to verify if the user has been authenticated correctly
      if (this.user.u_id === 0) {
        alert("Email or Password is incorrect")
      } else {
        alert("You have been logged in successfully");
        this.cookieService.set( 'username', this.user.u_name );
        
        this.router.navigate(['home']);
        
      }
    
    });

    //console.log("LOG DETECT", this.user.u_id) ; 


  }

  ngOnInit(): void {
    
  }

}
