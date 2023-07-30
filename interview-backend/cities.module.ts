import { Module } from '@nestjs/common';
import { CitiesController } from 'src/cities/cities.controller';
import { CitiesService } from 'src/cities/cities.service';

@Module({
  controllers: [CitiesController],
  providers: [CitiesService],
})
export class CitiesModule {}
