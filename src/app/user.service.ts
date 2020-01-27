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

  logOut(){


    localStorage.removeItem("token");
    window.localStorage.clear();
    this.loggedIn = false;
    this.router.navigate(['/logIn']);
}

// currentUserInfo = "";







  ngOnInit() {}
}
