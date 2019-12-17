import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-facvourite',
  templateUrl: './facvourite.component.html',
  styleUrls: ['./facvourite.component.scss']
})
export class FacvouriteComponent implements OnInit {
//card 1
  title1;
  friend1;
  friend2;
  reason;

//card 2
title2;
friend3;
friend4;
reason2;

//card 3
title3;
friend5;
friend6;
reason3;


  constructor(
    private _movieService: MovieService,
    private _apiService: ApiService) { }

  ngOnInit() {
    //call favorited movies endpoint function in service
  }

}
