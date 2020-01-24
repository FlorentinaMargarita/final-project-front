import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {

  movieTitle = '';
  user=``;

  constructor(
    private router: Router,
    private _api: ApiService,
    public _movieService: MovieService,
    public _userService: UserService
    ) {     }

    ngOnInit() {
      this._userService.getUserInfo(this.user)
    }

  fetch1(){
  // populate  movie service
  this._api.search(this.movieTitle)
    .subscribe((res: any) => {
      console.log(res.results)
      this._movieService.movies  = res.results;
      // this._userService.getUserCred(this.user)
      //console.log("res:", res)
      this.router.navigate(['/reso']);
      })
  }


  // logout(){
  //   this._userService.logOut(this.user).subscribe( (res: any)=> {
  //     console.log(res)
  //     sessionStorage.setItem('token', res.token);
  //     this._userService.userInfo = res;
  //     this._userService.loggedIn = false;
  //     this.router.navigate(['/logIn']);
  //     sessionStorage.clear();
  //       })
  //   }


// this._userService.login(this.form).subscribe( (res: any)=> {
  // console.log(res)
  // sessionStorage.setItem('token', res.token);
  // this._userService.userInfo = res;
  // this._userService.getUserInfo(res).subscribe((mario: any)=> {
  // this._userService.userInfo = mario;
  // console.log ("getUserInfo", mario)
  // });
  // sessionStorage.setItem('userId', res.userId);
  // this._userService.loggedIn = true;
  // this.router.navigate(['reso'])

  best() {
  this.router.navigate(['/logIn']);
}

best1() {
  this.router.navigate(['/register']);
}




}


