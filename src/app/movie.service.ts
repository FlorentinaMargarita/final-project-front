import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { VirtualTimeScheduler } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: any [] = [];
  favorites;
  favoriteUrl: string = `https://movie-demo-florentina-be.herokuapp.com/api/appUsers`;
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
    const URL = `${this.favoriteUrl}/${userId}/favourites?access_token=${token}`; //! Vorsicht erstes Element war ein Abstand nach erstem {
    this.favorites.push(movie);
    return this._http.post(URL, {"title": movie.title, "poster_path": movie.poster_path, "appUserId": userId })
  }


  deleteFavorites(movie: any){
    console.log(movie);
    const userId = sessionStorage.getItem('userId');
    const token = sessionStorage.getItem('token')
    const deleteURL = `${this.favoriteUrl}/${userId}/favourites/${movie.id}?access_token=${token}`;
    return this._http.delete(deleteURL).subscribe( data => {this.getFavorites()})
  }

//http://localhost:3000/api/appUsers/ID OF APP USER/favourites/MOVIEID?access_token=TOKEN


  createHeader(){
    return new HttpHeaders().set('Authorization', sessionStorage.getItem('token'))
  }
}
