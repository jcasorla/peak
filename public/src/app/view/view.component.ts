import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  movie: any = {};
  errors:any;
  constructor(
    private _httpService: HttpService, 
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      let id=params['id'];
      this.findMovie(id)
  });

  }

  findMovie(id) {
    const observable = this._httpService.getMovie(id);
    observable.subscribe(data => {
      console.log(data['movie']);
      this.movie = data['movie'];
    });
  }

  onClickDelete(id) {
    const observable = this._httpService.deleteMovie(id);
    observable.subscribe(data => {
      console.log(data);
      this._router.navigate(['/movies']);
    });
  }

}
