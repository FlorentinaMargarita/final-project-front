import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export interface MovieList {  // MovieList
  page: number;
  results: Movie [];
  total_pages: number;
  total_results: number;
}

export interface Movie { 
  adult: Boolean;
  poster_path: string;
  title: string;
  id: number;
  overview: string;
  popularity: number;
  release_date: string;
}


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private _http: HttpClient) { }

  apiKey: string = "MUSS NOCH EINFUEGEN";
  baseUrl = "https://api.themoviedb.org/3";

  routes = {
    topRated: "movie/top_rated",
    movie: "movie/"
  };
  imageBaseUrl: string = "https://image.tmdb.org/t/p/";

  posterSizes: string[] = [
    "w92",
    "w154",
    "w185",
    "w342",
    "w500",
    "w780",
    "original"
  ];


  getMovie(movieId: number) {
    return this._http.get(
      `${this.baseUrl}${this.routes.movie}${movieId}?api_key=${this.apiKey}&language=en-US`
    );
  }

  getMovies(route: string) {
    return this._http.get(`${this.baseUrl}${this.routes[route]}?api_key=${this.apiKey}&language=en-US&page=1`);
  }

  getMovieImagePath(poster_path: string) {
    return this.imageBaseUrl + this.posterSizes[4] + poster_path;
  }


  getData() {
   return this._http.get(`${this.baseUrl}&page=1&include_adult=false&query=${this.getMovies}`)
  }
}
