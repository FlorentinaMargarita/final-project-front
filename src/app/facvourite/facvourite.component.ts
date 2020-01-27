import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { MovieService } from '../movie.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-facvourite',
  templateUrl: './facvourite.component.html',
  styleUrls: ['./facvourite.component.scss']
})
export class FacvouriteComponent implements OnInit {

  favorites: any;
  movie: any;
  index;

  constructor(
    public _movieService: MovieService,
    public _userService: UserService,
    public _apiService: ApiService) {

    }

  ngOnInit() {
    this._movieService.getFavorites();
  }

  deleteFavorites(movie){
    this._movieService.deleteFavorites(movie);
  }

}
