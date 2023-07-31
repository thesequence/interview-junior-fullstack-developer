import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-city-search-form',
  templateUrl: './city-search-form.component.html',
})
export class CitySearchFormComponent {
  searchQuery: string = '';

  constructor(private apiService: ApiService) {}

  onSubmit(): void {
    // Call the API service to search for cities
    this.apiService.searchCities(this.searchQuery).subscribe({
      next: (data) => {
        console.log('Received data:', data);
      },
      error: (error) => {
        console.error('Error:', error);
      },
    });
  }
}
