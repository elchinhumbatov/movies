import { Component, OnInit } from '@angular/core';
import { MoviesApiService } from '../../service/movies-api.service';
import { ActivatedRoute } from '@angular/router';

export interface Movie {
  id?: string;
  title?: string;
  original_title?: string;
  description?: string;
  director?: string;
  producer?: string;
  rt_score?: string;
  running_time?: string;
  release_date?: string;
}

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: Movie = {};
  overlayClass;

  constructor(private moviesApiService: MoviesApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(movie => {
      this.moviesApiService.getMovie(movie.id).subscribe(response => {
        this.movie = response;
      });
    });
  }
  toggleOverlay(styleClass): void {
    this.overlayClass = styleClass;
  }
}
