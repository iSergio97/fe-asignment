import { Component, OnInit, Input } from '@angular/core';
import { Show } from 'src/app/interfaces/show.interface';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss'],
})
export class FilmCardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input()
  show: Show | undefined;

}
