import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { MovieService } from './movie.service';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(
    private _http: HttpClient,
    private _movieService: MovieService) { }

  apiKey: string = "883bb4c5b69e9a46b9fd762da7bd2471";
  baseUrl = "https://api.themoviedb.org/3/";
  imageBaseUrl: string = "https://image.tmdb.org/t/p/";

  routes = {
    movie: "movie",
    person: "search/person",
    movieSearch: "search/movie"
  };

  posterSizes: string[] = [
    "w92/",
    "w154",
    "w185",
    "w342",
    "w500",
    "w780",
    "original"
  ];

  search(searchTerm) {
    //return this._http.get(`${this.baseUrl}${this.routes.person}?api_key=${this.apiKey}&page=1&include_adult=false&query=${searchTerm}`)
    return this._http.get(`${this.baseUrl}${this.routes.movieSearch}?api_key=${this.apiKey}&page=1&include_adult=false&query=${searchTerm}`)
  }

  getMovies(route: string) {
    return this._http.get(`${this.baseUrl}${this.routes[route]}?api_key=${this.apiKey}&language=en-US&page=1`);
  }

  getMovieImagePath(poster_path: string) {
    return this.imageBaseUrl + this.posterSizes[4] + poster_path;
  }

}
