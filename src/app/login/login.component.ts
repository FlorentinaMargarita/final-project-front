import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  form = {
    // fistName: "",
    password: "",
    email: ""
  };

  constructor(private router: Router, private _userService: UserService) {}

  user: any = {};

  ngOnInit() {}

  dologIn() {
    console.log("login",this.form);
    this._userService.login(this.form).subscribe( (res: any)=> {
      console.log(res)
      sessionStorage.setItem('token', res.token); //token is stored in sessionStorage

      sessionStorage.setItem('userId', res.userId);
      //this._userService.firstName = res.firstName;
      // sessionStorage.setItem('loginResponseId', res.id);
      this._userService.loggedIn = true;
      this.router.navigate(['reso'])
    })
  }
}
