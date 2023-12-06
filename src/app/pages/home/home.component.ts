import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Show } from 'src/app/interfaces/show.interface';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private fs: FilmsService, private platform: Platform) { }

  loading: boolean = false;

  isMobile: boolean = this.platform.is('mobile') || document.documentElement.clientWidth < 1000;

  love: Show[] = [];

  action: Show[] = [];

  sport: Show[] = [];

  horror: Show[] = [];

  ngOnInit(): void {
    this.loading = true;
    this.getShowsByGenre('love');
    this.getShowsByGenre('action');
    this.getShowsByGenre('sport');
    this.getShowsByGenre('horror');
    this.loading = false;
    
  }

  getShowsByGenre(genre: string) {
    this.fs.getFilmsByGenre(genre)
      .subscribe({
        next: (shows) => {
          switch (genre) {
            case 'love':
              this.love = shows.map(c => c.show);
              break;
            case 'action':
              this.action = shows.map(c => c.show);
              break;
            case 'sport':
              this.sport = shows.map(c => c.show);
              break;
            case 'horror':
              this.horror = shows.map(c => c.show);
              break;
            default:
              console.log('Default option not defined');
              break;
          }
        },
        error: console.error,
        complete: console.log,
      });
  }
}
