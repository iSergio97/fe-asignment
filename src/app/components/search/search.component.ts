import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {

  constructor(private router: Router, private fs: FilmsService) { }

  movieFinder: FormControl<string | null> = new FormControl('');

  errorMessage: string = '';

  navigateToFilm() {
    let movieName: string = this.movieFinder.value ?? '';
    this.errorMessage = '';
    this.fs.getFilmByName(movieName)
    .subscribe({
      next: id => this.router.navigate(['/film', id]),
      error: () => this.errorMessage = 'There is no film related to that title'
    });
    this.movieFinder.reset('');
  }

  goToFilm(event: Event) {
    console.log(event);
  }

}
