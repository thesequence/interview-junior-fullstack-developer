import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitySearchFormComponent } from './city-search-form/city-search-form.component';
import { ResultsListComponent } from './results-list/results-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CitySearchFormComponent,
    ResultsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
