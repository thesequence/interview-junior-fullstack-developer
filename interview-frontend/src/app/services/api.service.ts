import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  searchCities(query: string): Observable<any> {
    if (!query || query.trim() === '') {
      return of([]);
    }
    const url = `${this.baseUrl}/cities?query=${encodeURIComponent(query)}`;
    return this.http.get(url);
  }
}
