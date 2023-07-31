import { Component } from '@angular/core';
import { ApiService } from '';

@Component({
  selector: 'app-city-search-form',
  templateUrl: './city-search-form.component.html',
  /* styleUrls: ['./city-search-form.component.scss'] */
})
export class CitySearchFormComponent {
  searchQuery: string = '';

  constructor(private apiService: ApiService) {}

  onSubmit(): void {
    // Call API service to search for cities
    this.apiService.searchCities(this.searchQuery).subscribe((data) => {},
      (error) => {
        console.error('Error:', error);
        )
  }

}
