import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { NotFoundCustomExceptionFilter } from '../src/exceptions/http-exception.filter';
import { CitiesModule } from 'cities.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CitiesModule],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_FILTER, useClass: NotFoundCustomExceptionFilter },
  ],
})
export class AppModule {}
