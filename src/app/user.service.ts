import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  }  from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(public _http: HttpClient) { }

  baseUrl: string = "http://localhost:3000/api/";
  appUserUrl: string = "appUsers/"
  loginUrl: string = "appUsers/login"
  logoutUrl: string = "appUsers/logout"
  isLoggedIn: boolean = false;
  firstName = ""
  userFavoritedMovies

  registerUser(credentials){
    return this._http.post(`${this.baseUrl}${this.appUserUrl}`, credentials);
  }

  login(credentials){
    //get favorited movies
    //set the subscribe res to userFavoritedMovies
    return this._http.post(`${this.baseUrl}${this.loginUrl}`, credentials);
  }

  // logout(){
  //   return this._http.post(`${this.baseUrl}${this.logoutUrl}`, sessionStorage.getItem('token'), {headers: this.createHeader()})
  // }

  // getUserCred(userId: string){
  //   return this._http.get(`${this.baseUrl}${this.appUserUrl}${userId}`, {headers: this.createHeader()});
  // }

  // createHeader(){
  //   return new HttpHeaders().set('Authorization', sessionStorage.getItem('token'))
  // }

}