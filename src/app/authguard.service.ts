import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor( public router: Router, public _userService: UserService) { }


canActivate(): boolean {
  if (!this._userService.loggedIn) {
    this.router.navigate(['login']);
    return false;
  }
  return true;
}
}
