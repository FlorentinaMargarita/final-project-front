import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsernameService } from "../username.service";



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
    private _usernameService : UsernameService
    ) {}

//   next(signUp){
//   this.router.navigate([`facvourite`]);
//   signUp();
// }

logIn(){ 
  console.log (this.form)
  this._usernameService.registerUser(this.form).subscribe( (res: any)=> { 
    console.log(res)
    sessionStorage.setItem('token', res.token); //token is stored in sessionStorage
    sessionStorage.setItem('userId', res.userId);
    this._usernameService.firstName = res.firstName;
    this._usernameService.isLoggedIn = true;
    this.goToDash();
  })
}

goToDash(){
  this.router.navigate(['/reso'])
}
    

  ngOnInit() {
  }

}