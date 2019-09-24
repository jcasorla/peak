import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){
	  //this.getMovies();
    
}
getMovies() {
  return this._http.get('/api/movies');
}
getMovie(id) {
  return this._http.get('/api/movies/' + id);
}

addMovie(data){
  return this._http.post('/api/movies', data)
}

updateMovie(data) {
  return this._http.put('/api/movies/' + data._id, data);
}
deleteMovie(id) {
  return this._http.delete('/api/movies/' + id);
}

review(movie,review){
  
  console.log("I am ok" + movie);
  console.log(review);
  let url='/api/movies/' + movie._id + '/review/' 
  console.log("I am in review in service");
  return this._http.post(url,review);
}

review2(movie,review){
  console.log("work? " ,movie._id);
  let url='/api/movies/' + movie._id + '/review/' 
  console.log(url);
  return this._http.post(url,review);

}



}



