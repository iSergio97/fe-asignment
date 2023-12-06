import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Episode } from 'src/app/interfaces/episode.interface';
import { Show } from 'src/app/interfaces/show.interface';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss'],
})
export class FilmComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private fs: FilmsService) { }

  id!: number;
  show!: Show;

  loading: boolean = false;

  seasons!: Set<number>;

  selectedSeason: FormControl<number | null> = new FormControl(1);

  episodesBySeason: Episode[] = [];

  selectedEpisode: number = -1;

  errorMessage: string = '';

  ngOnInit() {
    this.errorMessage = '';
    this.loading = true;
    this.id = +(this.activatedRoute.snapshot.paramMap.get('id') ?? -1);
    this.getShowById();
  }
  getShowById(): void {
    this.fs.getFilmById(this.id).subscribe({
      next: (showQuery) => {
        this.show = showQuery;
        this.seasons = new Set(this.show._embedded.episodes.map(e => e.season));
        this.getEpisodesBySeasson();
      },
      error: (error) => {
        this.loading = false;
        console.error(error);
        this.errorMessage = 'There was a problem retrieving the information. Please try again in a few minutes.'
      },
      complete: () => this.loading = false,
    });
  }

  getEpisodesBySeasson(): void {
    let season = this.selectedSeason.value;
    this.episodesBySeason = this.show._embedded.episodes.filter(e => e.season === season);
  }

}
