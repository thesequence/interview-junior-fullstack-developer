import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CitySearchFormComponent } from './city-search-form/city-search-form.component';
import { AppComponent } from './app.component';

import { ResultsListComponent } from './results-list/results-list.component';

import { ApiService } from './services/api.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [
        AppComponent,
        CitySearchFormComponent,
        ResultsListComponent,
      ],
      providers: [ApiService],
    }).compileComponents();
  });

  it('should create the app', () => {
    fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
