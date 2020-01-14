import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    public _http: HttpClient,
    public router: Router
    ) { }

  baseUrl: string = "https://movie-demo-florentina-be.herokuapp.com/";
  appUserUrl: string = "api/appUsers/"
  loginUrl: string = "api/appUsers/login"
  logoutUrl: string = "api/appUsers/logout"
  isLoggedIn: boolean = false;
  firstName = "";
  userFavoritedMovies
  userId
  credentials: any = {}
  token = sessionStorage.getItem("token");

  registerUser(user){
    return this._http.post(`${this.baseUrl}${this.appUserUrl}`, user);
  }

  login(credentials){
    return this._http.post(`${this.baseUrl}${this.loginUrl}`, credentials);
  }

  UserUrl: string = `https://movie-demo-florentina-be.herokuapp.com`;




    getUserCred(userId: string){
      return this._http.get(`${this.baseUrl}${this.appUserUrl}${userId}`);
  }

  createHeader(){
    return new HttpHeaders().set('Authorization', sessionStorage.getItem('token'))
  }

}
//   getUserInfo(user){
//     let currentUserId: string = sessionStorage.getItem('userId');
//     const userId = sessionStorage.getItem("userId");
//     const token = sessionStorage.getItem('token')
//     return this._http.get(`http://localhost:3000/api/appUsers?access_token=${token}`)
//  }

  // showUser(userInfo) {
  //   //return this._http.get(`${this.baseUrl}${this.routes.person}?api_key=${this.apiKey}&page=1&include_adult=false&query=${searchTerm}`)
  //   return this._http.get(`${this.baseUrl}/${userId}${this.routes.movieSearch}?api_key=${this.apiKey}&page=1&include_adult=false&query=${searchTerm}`)
  // }


  // logout(){
  //   return this._http.post(`${this.baseUrl}${this.logoutUrl}`, sessionStorage.getItem('token'), {headers: this.createHeader()})
  // }

  // getUserCred(userId: string){
  //   return this._http.get(`${this.baseUrl}${this.appUserUrl}${userId}`, {headers: this.createHeader()}

  //   );
