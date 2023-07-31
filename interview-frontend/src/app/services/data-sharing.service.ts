import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataSharingService {
  private searchResults: any[] = [];

  setSearchResults(results: any[]): void {
    this.searchResults = results;
  }

  getSearchResults(): any[] {
    return this.searchResults;
  }
}
