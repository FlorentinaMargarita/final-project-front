import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  }  from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    public _http: HttpClient,
    public router: Router
    ) { }

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
    return this._http.post(`${this.baseUrl}${this.loginUrl}`, credentials);
  }

  UserUrl: string = `http://localhost:3000/api/appUsers`;

  showUser(user: any){
    //this.firstName = firstName;
    const userId = sessionStorage.getItem("userId");
    const URL = `${ this.UserUrl}/${userId}`;
    return this._http.post(URL, {"firstName": user.firstName, "appUserId": userId }) 
  }

   
  getUser(){
    const userId = sessionStorage.getItem("userId");
    const URL = `${this.UserUrl}/${userId}`;
    return this._http.get(URL).subscribe( (res: any) => {
      this.firstName = res;
      console.log("this.firstName:", this.firstName)
      this.router.navigate(['/facvourite'])
    })
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