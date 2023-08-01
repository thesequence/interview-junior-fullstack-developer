import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitySearchFormComponent } from './city-search-form/city-search-form.component';
/* import { ResultsListComponent } from './results-list/results-list.component'; */
import { ResultsListModule } from '../app/results-list/results-list.module';

@NgModule({
  declarations: [
    AppComponent,
    CitySearchFormComponent,
    /* ResultsListComponent */
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ResultsListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
