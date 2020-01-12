import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { MovieService } from '../movie.service';


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
    public _apiService: ApiService) {

    }

  ngOnInit() {
    this._movieService.getFavorites();
  }

  deleteFavorites(movie){
    this._movieService.deleteFavorites(movie);
  }


  // deleteFavorites(movie){
  // for (var i = 0; i< this.favorites.length; i++) {
  //   if (this.favorites[i]["movie"]== movie) {
  //     this.favorites.splice(i,1)
  //   }}
  //   this.movie.delete();
  //   this._movieService.deleteFavorites(movie).subscribe( (res: any) => {
  //         console.log(res)
  //       })

  // }

  // deleteFavorites(movie){
  //   this._movieService.deleteFavorites(movie).subscribe( (res: any) => {
  //     console.log(res)
  //   })
  // }


  // addToFavorites(movie){
  //   this._movieService.addToFavorites(movie).subscribe( (res: any) => {
  //     console.log(res)
  //   })
  // }

}
