import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  movies: [];
  selectedMovie: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {

    this.getAllMovies();
  }

  getAllMovies() {
    const observable = this._httpService.getMovies();
    observable.subscribe(data => {
      console.log("get all movies");
      console.log(data);
      this.movies = data['movies'];
    });
  }

}
