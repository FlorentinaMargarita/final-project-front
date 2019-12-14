import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private _http: HttpClient) { }

  apiKey: string = "883bb4c5b69e9a46b9fd762da7bd2471";
  baseUrl = "https://api.themoviedb.org/3/";

  routes = {
    movie: "movie/",
    person: "search/person/",
    movieSearch: "search/movie/"
  };
  
  imageBaseUrl: string = "https://image.tmdb.org/t/p/";

  search(searchTerm){
    // dieser code stimmt:
    //return this._http.get(`${this.baseUrl}${this.routes.person}?api_key=${this.apiKey}&page=1&include_adult=false&query=${searchTerm}`)
    return this._http.get(`${this.baseUrl}${this.routes.movieSearch}?api_key=${this.apiKey}&page=1&include_adult=false&query=${searchTerm}`)
  }


}
