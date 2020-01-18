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

  // register(){
  //   console.log (this.form)
  //   this._userService.registerUser(this.form).subscribe( (res: any)=> {
  //     console.log(res)
  //     sessionStorage.setItem('token', res.token); //token is stored in sessionStorage
  //     sessionStorage.setItem('userId', res.userId);
  //     sessionStorage.setItem('firstName', res.firstName);
  //     sessionStorage.setItem('secondName', res.secondName);

      // this._userService.firstName = res.firstName;
      // this._userService.isLoggedIn = true;
      // this.goToDash();
  //   })
  // }

  goToDash(){
    this.router.navigate(['/reso'])
  }

  ngOnInit() {
  }

}
