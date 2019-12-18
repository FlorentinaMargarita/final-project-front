import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: any [] = [];
  constructor(
    private _http: HttpClient,
    private router: Router
  ) { }

  favorites;
  favoriteUrl: string = `http://localhost:3000/api/appUsers`;
  favoritedMovie
 


  getFavorites(){
    const userId = sessionStorage.getItem("userId");
    const token = sessionStorage.getItem('token')  
    const URL = `${this.favoriteUrl}/${userId}/favourites?access_token=${token}`;
    return this._http.get(URL).subscribe( res => {
      this.favorites = res;
      console.log("this.favorites:", this.favorites)
      this.router.navigate(['/facvourite'])
    })
  }
  
  addToFavorites(movie: any){
    this.favoritedMovie = movie;
    const userId = sessionStorage.getItem("userId");
    const token = sessionStorage.getItem('token')  
    const URL = `${ this.favoriteUrl}/${userId}/favourites?access_token=${token}`;
    // this.favorites.push(movie.id);
    // this.getFavorites()
    return this._http.post(URL, {"title": movie.title, "poster_path": movie.poster_path, "appUserId": userId }) 
  }

  deleteFavorites(movie: any){
    this.favoritedMovie = movie;
    const userId = sessionStorage.getItem("userId");
    const token = sessionStorage.getItem('token')  
    const URL = `${this.favoriteUrl}/${userId}/favourites?access_token=${token}`;
    return this._http.delete(URL, {})
    }
  }

  // deleteFavorites(movie: any){
  //   this.favoritedMovie = movie;
  //   const userId = sessionStorage.getItem("userId");
  //   const token = sessionStorage.getItem('token')  
  //   const URL = `${this.favoriteUrl}/${userId}/favourites?access_token=${token}`;
  //   return this._http.delete(URL).subscribe( res => {
  //     this.favorites = res;
  //     console.log("this.favorites:", this.favorites)
  //     this.router.navigate(['/facvourite'])
  //   })
  // }

  
  


