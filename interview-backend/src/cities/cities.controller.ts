import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { CitiesService } from './cities.service';

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get()
  getCities(@Query('query') query: string): any[] {
    if (!query) {
      throw new BadRequestException(
        'Please peovide a city name in the query parameter',
      );
    }

    const matchedCities = this.citiesService.searchCities(query);
    return matchedCities.slice(0, 5); // Return up to 5 matching cities
  }
}
