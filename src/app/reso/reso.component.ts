import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-reso',
  templateUrl: './reso.component.html',
  styleUrls: ['./reso.component.scss'],
  providers: [ApiService]
})
export class ResoComponent  {

  movies: any;

  constructor(
    private _movieService: MovieService,
    private _apiService: ApiService
    ) { }

  ngOnInit() {}

  // getMovieImagePath(poster_path: string){
  //   return this._apiService.getMovieImagePath(poster_path)
  // }

}

