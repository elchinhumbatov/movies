import { Component, OnInit } from '@angular/core';
import { MoviesApiService } from '../../service/movies-api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  movies: [];
  toggleLoader = true;

  constructor(private moviesApiService: MoviesApiService) {}

  ngOnInit(): void {
    this.moviesApiService.getMovies().subscribe((response: any) => {
      this.movies = response;
      this.toggleLoader = false;
    });
  }
}
