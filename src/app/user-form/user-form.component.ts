import {Component, OnInit} from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {

    this.user = new User();
  }

  onSubmit() {
    this.userService.save(this.user).subscribe(() => this.gotoProductGrid());
  }

  gotoProductGrid() {
    alert("Information has been saved");
    // this.router.navigate(['/main']).then(() => {
    //   console.log("REDIRECTED TO /main");
    // });
  }

  ngOnInit(): void {
    alert("Please fill in the details carefully, as the data will be used for the delivery of the food items")
  }

}
