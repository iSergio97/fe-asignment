import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilmComponent } from './film.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FilmsService } from 'src/app/services/films.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from 'src/app/components/components.module';
import { SearchComponent } from 'src/app/components/search/search.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { lokiShow } from 'src/app/shows/show.spec-helper';

describe('FilmComponent', () => {
  let component: FilmComponent;
  let fixture: ComponentFixture<FilmComponent>;
  let fs: FilmsService;
  let controller: HttpTestingController;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FilmComponent, SearchComponent, HeaderComponent],
      imports: [IonicModule.forRoot(), HttpClientModule, FormsModule, ReactiveFormsModule, BrowserModule, ComponentsModule, HttpClientTestingModule],
      providers: [
        FilmsService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => 42289,
              },
            },
          },
        }
      ]
    }).compileComponents();


    fixture = TestBed.createComponent(FilmComponent);
    fs = TestBed.get(FilmsService);
    component = fixture.componentInstance;
    controller = TestBed.inject(HttpTestingController);
    component.ngOnInit();
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('URL param ID is read and assing', () => {
    expect(42289).toBe(component.id);
  });
});
