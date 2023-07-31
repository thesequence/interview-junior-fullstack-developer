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
      imports: [HttpClientTestingModule, RouterTestingModule], // Include RouterTestingModule in the imports
      declarations: [AppComponent, CitySearchFormComponent, ResultsListComponent],
      providers: [ApiService], // If ApiService is not already added here
    }).compileComponents();
  });

  it('should create the app', () => {
    fixture = TestBed.createComponent(AppComponent); // Use the fixture from beforeEach instead of creating a new one
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
