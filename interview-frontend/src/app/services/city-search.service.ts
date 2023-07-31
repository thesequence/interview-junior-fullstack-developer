import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CitySearchService {
  private searchResults: any[] = [];

  setSearchResults(results: any[]): void {
    this.searchResults = results;
  }

  getSearchResults(): any[] {
    return this.searchResults;
  }
}
