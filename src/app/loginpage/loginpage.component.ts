import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  user: User;

  constructor() {
    this.user = new User();
  }

  onSubmit() {
    alert("Information has been saved");
  }

  ngOnInit(): void {
  }

}
