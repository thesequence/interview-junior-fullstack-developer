import { Injectable } from '@nestjs/common';
import * as citiesData from 'cities.json';

@Injectable()
export class CitiesService {
  searchCities(query: string) {
    const cities = citiesData as any[];

    const filteredCities = cities.filter((city) =>
      city.cityName.toLowerCase().includes(query.toLowerCase()),
    );
    return filteredCities.slice(0, 5); // Return up to 5 matching cities
  }
}
