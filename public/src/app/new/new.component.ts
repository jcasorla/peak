import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from './../http.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  @Output()
  newMovie: any = {};
  newReview: any = {}
  myMovie: any = {};
  errors:any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm) {
    // console.log("enter? "+ this.newMovie.title);
    // console.log(this.newReview.name);
    
    this._httpService.addMovie(this.newMovie).subscribe({
      next: (movie)=>{
      
      // console.log("I am in add movie: ", movie);
      this.myMovie=movie;
      // console.log("I am in my movie: ", this.myMovie);
      this.createReview();
      form.reset();
      this._router.navigate(['/movies']);
      // this.router.navigateByUrl('/');
     
      //enter review
      
     
    },
      error: error => {
        console.log(error);
        this.errors=error.error;

    }
    });

   

    

  }

  createReview(){
    // console.log("I am in createReview2: ", this.myMovie['newMovie']);
    let myMovie2=this.myMovie['newMovie'];
    // console.log("this is my review:", myMovie2);

    this._httpService.review2(myMovie2, this.newReview).subscribe({
      next: (review)=>{
      
      // console.log("I am in add review: ", review);
      
     
      this._router.navigate(['/movies']);
      // this.router.navigateByUrl('/');


    },
      error: error => {
        console.log(this.myMovie);
        console.log(error);
        this.errors=error.error;

    }
    });

  }

}
