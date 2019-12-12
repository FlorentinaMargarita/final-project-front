import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {

  movies;
  movieTitle = '';
  
  constructor(private router: Router, private _api: ApiService ) { }
  
  // I tried to make a higher-order function, to be able for it to route 
  //to the result(reso)-component and only then in the second searchMovie Function it should look for movies:

fetch1(searchMovie){
 this.router.navigate(['/reso']);
 searchMovie();
 }

 searchMovie(){
 this._api.getData(this.movieTitle)
 }

}


