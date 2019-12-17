import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-reso',
  templateUrl: './reso.component.html',
  styleUrls: ['./reso.component.scss'],
})
export class ResoComponent  {

  movies: any;
  // movie: any;

  constructor(
    private _movieService: MovieService,
    private _apiService: ApiService,
    private router: Router, 
    private _http: HttpClient
    ) { }

  ngOnInit() {}

  addToFavorites(movie){
    this._movieService.addToFavorites(movie).subscribe( (res: any) => {
      console.log(res)
      this.goTofavs();
    })
  }

  
  goTofavs() {
    this.router.navigate(['/facvourite'])
  }


  }