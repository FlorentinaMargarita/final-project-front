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
 
  addToFavorites(movie: any){
    this.favoritedMovie = movie;
    const userId = sessionStorage.getItem("userId");
    const URL = `${ this.favoriteUrl}/${userId}/favourites`;
    // this.favorites.push(movie.id);
    // this.getFavorites()
    return this._http.post(URL, {"title": movie.title, "poster_path": movie.poster_path, "appUserId": userId }) 
  }

  getFavorites(){
    const userId = sessionStorage.getItem("userId");
    const URL = `${this.favoriteUrl}/${userId}/favourites`;
    return this._http.get(URL).subscribe( res => {
      this.favorites = res;
      console.log("this.favorites:", this.favorites)
      this.router.navigate(['/facvourite'])
    })
  }
}
