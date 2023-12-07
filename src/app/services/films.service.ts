import { Injectable } from '@angular/core';
import { Film } from '../interfaces/film.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap, first } from 'rxjs';
import { Show } from '../interfaces/show.interface';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }

  private baseURL: string = 'https://api.tvmaze.com';

  getFilmsByGenre(genre: string): Observable<Film[]> {
    let url = `${this.baseURL}/search/shows?q=${genre}`;
    return this.http.get<Film[]>(url);
  }

  getFilmById(id: number): Observable<Show> {
    let url = `${this.baseURL}/shows/${id}?embed=episodes`;
    return this.http.get<Show>(url).pipe(first());
  }

  getFilmByName(name: string): Observable<number> {
    let url = `${this.baseURL}/singlesearch/shows?q=${name}&embed=episodes`;
    return this.http.get<Show>(url).pipe(
      map(({id}) => id)
    );
  }
}
