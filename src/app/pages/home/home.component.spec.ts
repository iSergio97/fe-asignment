import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SearchComponent } from 'src/app/components/search/search.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, HeaderComponent, SearchComponent],
      imports: [IonicModule.forRoot(), HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('loading tag is displayed if data is not fetched', () => {
    component.loading = true;
    let h1 = fixture.nativeElement.querySelector('h1');
    expect(h1).toBeDefined();
  });

  it('data is loaded - size', () => {
    expect(component.love.length).toBe(10);
    expect(component.action.length).toBe(10);
    expect(component.sport.length).toBe(10);
    expect(component.horror.length).toBe(10);
  });
});
