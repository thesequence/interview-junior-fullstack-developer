import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsListComponent } from './results-list.component';

@NgModule({
  declarations: [ResultsListComponent],
  imports: [CommonModule],
  exports: [ResultsListComponent], 
})
export class ResultsListModule {}
