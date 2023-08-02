import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-city-search-form',
  templateUrl: './city-search-form.component.html',
})
export class CitySearchFormComponent {
  searchQuery: string = '';
  citiesList: any[] = [];
  allCitiesList: any[] = [];
  showResults: boolean = false;

  constructor(private apiService: ApiService) {}

  onSubmit(): void {
    // Call the API service to search for cities
    this.apiService.searchCities(this.searchQuery).subscribe({
      next: (data) => {
        this.citiesList = data;
        this.allCitiesList = this.allCitiesList.concat(data);
        this.showResults = true;
        console.log('Received data:', data);
      },
      error: (error) => {
        console.error('Error:', error);
      },
    });
  }
}
