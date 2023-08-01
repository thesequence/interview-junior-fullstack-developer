import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'interview-frontend';
  citiesList: any[] = [];

  constructor(private apiService: ApiService) {}

  // You can handle the search results received from the service here
  // and update the searchResults property.
  handleSearchResults(data: any): void {
    this.citiesList = data;
  }
}
