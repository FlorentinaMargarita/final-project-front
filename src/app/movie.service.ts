import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: any [] = [];
  favorites;
  favoriteUrl: string = `http://localhost:3000/api/appUsers`;
  favoritedMovie;
  movie;


  constructor(
    public _http: HttpClient,
    public router: Router,
  ) { }

  getFavorites(){
    this.router.navigate(['/facvourite']);
    const userId = sessionStorage.getItem('userId');
    const token = sessionStorage.getItem('token')
    const URL = `${this.favoriteUrl}/${userId}/favourites?access_token=${token}`;
    console.log(URL);
    this._http.get(URL).subscribe( res => {
      this.favorites = res;
      console.log("this.favorites:", this.favorites)
    })
  }

  addToFavorites(movie: any){
    this.favoritedMovie = movie;
    const userId = sessionStorage.getItem('userId');
    const token = sessionStorage.getItem('token')
    const URL = `${ this.favoriteUrl}/${userId}/favourites?access_token=${token}`;
    this.favorites.push(movie);
    return this._http.post(URL, {"title": movie.title, "poster_path": movie.poster_path, "appUserId": userId })
  }





  deleteFavorites(movie){
    console.log(movie);
    const userId = sessionStorage.getItem('userId');
    const token = sessionStorage.getItem('token')
    const deleteURL =`${ this.favoriteUrl}/${userId}/favourites?access_token=${token}`;
    return this._http.delete(deleteURL)

  }


  createHeader(){
    return new HttpHeaders().set('Authorization', sessionStorage.getItem('token'))
  }
}
