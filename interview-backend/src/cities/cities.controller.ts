import { Controller, Get, NotFoundException, Query } from '@nestjs/common';
import { CitiesService } from './cities.service';

@Controller('cities')
export class CitiesController {
  constructor(private /* readonly */ citiesService: CitiesService) {}

  @Get()
  searchCities(@Query('query') query: string): any[] {
    if (!query || query.trim() === '') {
      throw new NotFoundException('City query parameter is missing or emty.');
    }

    const matchedCities = this.citiesService.searchCities(query);
    return matchedCities;
  }
}
