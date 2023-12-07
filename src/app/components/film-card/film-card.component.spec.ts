import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilmCardComponent } from './film-card.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FilmsService } from 'src/app/services/films.service';
import { lokiShow } from 'src/app/shows/show.spec-helper';

describe('FilmCardComponent', () => {
  let component: FilmCardComponent;
  let fixture: ComponentFixture<FilmCardComponent>;
  let fs: FilmsService;
  let controller: HttpTestingController;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FilmCardComponent],
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [FilmsService]
    }).compileComponents();

    fixture = TestBed.createComponent(FilmCardComponent);
    fs = TestBed.inject(FilmsService);
    controller = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('if loading, show loading message', () => {
    component.show = undefined;
    let h1 = fixture.nativeElement.querySelector('h1');
    expect(h1).toBeTruthy();
  });

  it('show is defined and display info', () => {
    fs.getFilmById(41007).subscribe({
      next: showQuery => component.show = showQuery,
      error: console.error
    });

    const request = controller.expectOne('https://api.tvmaze.com/shows/41007?embed=episodes');
    request.flush(lokiShow);
    controller.verify();


    expect(component.show).toBeDefined();
  });

  it('show query is Loki', () => {
    fs.getFilmById(41007).subscribe({
      next: showQuery => component.show = showQuery,
      error: console.error
    });

    const request = controller.expectOne('https://api.tvmaze.com/shows/41007?embed=episodes');
    request.flush(lokiShow);
    controller.verify();

    expect(component.show?.name).toEqual('Loki');
  });

  it('show is Loki and ID is 41007', () => {
    fs.getFilmById(41007).subscribe({
      next: showQuery => component.show = showQuery,
      error: console.error
    });

    const request = controller.expectOne('https://api.tvmaze.com/shows/41007?embed=episodes');
    request.flush(lokiShow);
    controller.verify();

    expect(component.show?.id).toBe(41007);
  });

  it('Loki show has 12 episodes', () => {
    fs.getFilmById(41007).subscribe({
      next: showQuery => component.show = showQuery,
      error: console.error
    });

    const request = controller.expectOne('https://api.tvmaze.com/shows/41007?embed=episodes');
    request.flush(lokiShow);
    controller.verify();

    expect(component.show?._embedded.episodes.length).toEqual(12);
  });

  it('show is Loki and ID is 41007', () => {
    fs.getFilmById(41007).subscribe({
      next: showQuery => component.show = showQuery,
      error: console.error
    });

    const request = controller.expectOne('https://api.tvmaze.com/shows/41007?embed=episodes');
    request.flush(lokiShow);
    controller.verify();

    expect(component.show?.image.medium).toEqual("https://static.tvmaze.com/uploads/images/medium_portrait/478/1195717.jpg")
    expect(component.show?.image.original).toEqual("https://static.tvmaze.com/uploads/images/original_untouched/478/1195717.jpg")
  });
});
