import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-reso',
  templateUrl: './reso.component.html',
  styleUrls: ['./reso.component.scss'],
  providers: [ApiService]
})
export class ResoComponent  {

  constructor(private _api: ApiService) { }
  ngOnInit() {
  // this._api.getData()
  // .subscribe((res: any) => {
  //   //this.movies = res.results;
  //   this.movies = res.results;
  //   console.log("res:", res)
  //   })
  }
}

