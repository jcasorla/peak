import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {
  @Output()
  movie: any = {};
  newReview: any = {}
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


  //event: Event, form: NgForm

  createReview(event: Event, form: NgForm){
    // console.log("I am in createReview2: ", this.myMovie['newMovie']);
    // let myMovie2=this.myMovie['newMovie'];
    // console.log("this is my review:", myMovie2);

    this._httpService.review2(this.movie, this.newReview).subscribe({
      next: (review)=>{
      
      console.log("I am in add review: ", review);
      
     
      form.reset();
      this._router.navigate(['/movies']);


    },
      error: error => {
        console.log(error);
        this.errors=error.error;

    }
    });

  }

}
