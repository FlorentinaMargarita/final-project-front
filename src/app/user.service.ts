import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { Session } from 'protractor';


@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(public _http: HttpClient, public router: Router) {}

  password: "";
  email: "";
  baseUrl: string = "https://movie-demo-florentina-be.herokuapp.com/";
  appUserUrl: string = "api/appUsers/";
  // loginUrl: string = `api/appUsers/login?access_token=`;
  loginUrl: string = `api/appUsers/login`;
  loggedIn: boolean = false;
  userFavoritedMovies;
  token = sessionStorage.getItem("token");

  userInfo: any = {};



  login(form) {
    const URL = `${this.baseUrl}${this.loginUrl}`;
    return this._http.post(URL, form);
  }

  registerUser(form){
    const URL = `${this.baseUrl}${this.appUserUrl}`;
    return this._http.post(URL, form);
  }

  currentUserInfo = "";

  getUserInfo(user){
     const hi = `${this.baseUrl}${this.appUserUrl}${user.userId}?access_token=${user.token}`
     this.token = user.token;
    return this._http.get(hi, user)
  }


  createHeader(){
    return new HttpHeaders().set('Authorization', sessionStorage.getItem('token'))
  }

  logOut(): void{

    localStorage.removeItem("token");
    window.localStorage.clear();
    this.loggedIn = false;
    this.router.navigate(['/logIn']);
    // const  logoutUrl = "http://localhost:3000/api/appUsers/logout?access_token=";
    // console.log("logout", this.token)
    // console.log(logoutUrl + this.token, user)
    // return this._http.post(logoutUrl + this.token, user).subscribe(data => {})
}




// currentUserInfo = "";







  ngOnInit() {}
}
