import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form = {
    firstName: "",
    secondName: "",
    password: "",
    email: ""
  }

  constructor(
    private _userService: UserService,
    private router: Router
    ) { }

    user: any = {};

     ngOnInit() {}

  register(){
    console.log ("register", this.form)
    this._userService.registerUser(this.form).subscribe( (res: any)=> {
      console.log(res)
      this._userService.userInfo = res; //neu
      console.log(this._userService.userInfo)
      sessionStorage.setItem('token', res.token); //token is stored in sessionStorage
      sessionStorage.setItem('userId', res.userId);
      sessionStorage.setItem('firstName', res.firstName);
      sessionStorage.setItem('secondName', res.secondName);
      this._userService.loggedIn = true;
      this._userService.loggedIn = true;
      this.router.navigate(['reso'])
    })
  }





}
