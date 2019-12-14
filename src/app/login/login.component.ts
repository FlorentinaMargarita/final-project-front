import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  form = {
    // fistName: "",
    password: "",
    email: ""
  }

  constructor(
    private router : Router,
    private _userService : UserService
    ) {}

  logIn(){ 
    console.log (this.form)
    this._userService.login(this.form).subscribe( (res: any)=> { 
      console.log(res)
      sessionStorage.setItem('token', res.token); //token is stored in sessionStorage
      sessionStorage.setItem('userId', res.userId);
      this._userService.firstName = res.firstName;
      this._userService.isLoggedIn = true;
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
      fetch('http://localhost:8080/posts', { mode: 'no-cors' });
      this.goToDash();
    })
  }

  goToDash(){
    this.router.navigate(['/reso'])
  }
    

  ngOnInit() {
  }

}