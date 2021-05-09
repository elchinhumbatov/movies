import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    const url = 'https://ghibliapi.herokuapp.com/films?limit=12';
    return this.http.get(url);
  }
  getMovie(movieId): Observable<any> {
    const url = `https://ghibliapi.herokuapp.com/films/${movieId}`;
    return this.http.get(url);
  }
}
