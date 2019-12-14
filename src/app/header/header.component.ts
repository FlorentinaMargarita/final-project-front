import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {

  movieTitle = '';
  
  constructor(private router: Router, private _api: ApiService, private _movieService: MovieService) { }
  
  // I tried to make a higher-order function, to be able for it to route 
  //to the result(reso)-component and only then in the second searchMovie Function it should look for movies:

  fetch1(){
  // populate  movie service 
  this._api.search(this.movieTitle)
    .subscribe((res: any) => {
      console.log(res.results)
      this._movieService.movies  = res.results;
      //console.log("res:", res)
      this.router.navigate(['/reso']);
      })
   
  }
}


