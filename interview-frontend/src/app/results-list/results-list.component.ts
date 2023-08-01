import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
})
export class ResultsListComponent {
  @Input() cities: any[] = [];
}
