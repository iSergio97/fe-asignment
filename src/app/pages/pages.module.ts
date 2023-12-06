import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ErrorComponent } from './error/error.component';
import { FilmComponent } from './film/film.component';
import { HomeComponent } from './home/home.component';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ErrorComponent,
    FilmComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HttpClientModule,
    IonicModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  exports: [
    ErrorComponent,
    FilmComponent,
    HomeComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule { }
