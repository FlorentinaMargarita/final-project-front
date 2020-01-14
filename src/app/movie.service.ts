import { Injectable, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: any [] = [];
  favorites;
  favoriteUrl: string = `https://movie-demo-florentina-be.herokuapp.com/`;
  favoritedMovie;
  movie;


  constructor(
    public _http: HttpClient,
    public router: Router
  ) { }

  getFavorites(){
    this.router.navigate(['/facvourite']);
    const userId = sessionStorage.getItem("userId");
    const token = sessionStorage.getItem('token')
    const URL = `${this.favoriteUrl}/${userId}/favourites?access_token=${token}`;
    this._http.get(URL).subscribe( res => {
      this.favorites = res;
      console.log("this.favorites:", this.favorites)
    })
  }

  addToFavorites(movie: any){
    this.favoritedMovie = movie;
    const userId = sessionStorage.getItem("userId");
    const token = sessionStorage.getItem('token')
    const URL = `${ this.favoriteUrl}/${userId}/favourites?access_token=${token}`;
    // this.favorites.push(movie);
    return this._http.post(URL, {"title": movie.title, "poster_path": movie.poster_path, "appUserId": userId })
  }

  deleteFavorites(movie){
    console.log(movie);
    const userId = sessionStorage.getItem("userId")
    const token = sessionStorage.getItem('token')
    const URL= `http://localhost:3000/api/appUsers/${userId}/favourites/${movie.id}?access_token=${token}`
    //const URL = `${this.favoriteUrl}/${userId}/favourites/${movie.id}?access_token=${token}`;
    console.log("URL", URL)
    let movieIndex = this.favorites.indexOf(movie);
    this.favorites = this.favorites.splice(movieIndex, 1, 0);
    this.movie.delete();
    return this._http.delete(URL).subscribe ( res => {})
  }
}
