import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  firstName;

  constructor(private _userService: UserService) { }
  logIn(){ 
    console.log (this.form)
    this._userService.registerUser(this.form).subscribe( (res: any)=> { 
      console.log(res)
      sessionStorage.setItem('token', res.token); //token is stored in sessionStorage
      sessionStorage.setItem('userId', res.userId);
      this._userService.firstName = res.firstName;
      this._userService.isLoggedIn = true;
      this.goToDash();
    })
  }
  
  goToDash(){
    this.router.navigate(['/reso'])
  }
      
  ngOnInit() {
  }

}
