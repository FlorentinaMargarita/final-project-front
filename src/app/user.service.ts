import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(public _http: HttpClient, public router: Router) {}

  password: "";
  email: "";
  baseUrl: string = "http://localhost:3000/";
  appUserUrl: string = "api/appUsers/";
  // loginUrl: string = `api/appUsers/login?access_token=`;
  loginUrl: string = `api/appUsers/login`;
  logoutUrl: string = "api/appUsers/logout";
  loggedIn: boolean = false;
  userFavoritedMovies;

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
    return this._http.get(hi, user)
  }


  createHeader(){
    return new HttpHeaders().set('Authorization', sessionStorage.getItem('token'))
  }

  ngOnInit() {}
}
