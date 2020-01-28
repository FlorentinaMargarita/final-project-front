import { Component } from "@angular/core";
import { ApiService } from "../api.service";
import { Router } from "@angular/router";
import { MovieService } from "../movie.service";
import { UserService } from "../user.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  movieTitle = "";
  user = ``;

  constructor(
    private router: Router,
    private _api: ApiService,
    public _movieService: MovieService,
    public _userService: UserService
  ) {}

  ngOnInit() {
    this._userService.getUserInfo(this.user);
  }

  fetch1() {
    // populate  movie service
    this._api.search(this.movieTitle).subscribe((res: any) => {
      this._movieService.movies = res.results;
      this.router.navigate(["/result"]);
    });
  }

  best() {
    this.router.navigate(["/logIn"]);
  }

  best1() {
    this.router.navigate(["/register"]);
  }
}
