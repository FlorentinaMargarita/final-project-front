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

  constructor(private _movieService: MovieService) { }
  ngOnInit() {
  }
}

