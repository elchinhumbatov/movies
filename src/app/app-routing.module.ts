import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { MovieComponent } from './components/movie/movie.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'movie/:id', component: MovieComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
