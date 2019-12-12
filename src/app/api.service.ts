import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  movies = [];
  title = "name";

  baseUrl = "https://api.themoviedb.org/3/search/movie?api_key=883bb4c5b69e9a46b9fd762da7bd2471&language=en-US";

  constructor(private http: HttpClient) { }

  getData(searchTerm) {

    this.http.get(`${this.baseUrl}&page=1&include_adult=false&query=${searchTerm}`)
      .subscribe( (res:any) => {
        this.movies = res.results
        this.title = "later"
        console.log( 'res', this.title,this.movies);
    })
  }
}
