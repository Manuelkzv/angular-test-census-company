import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

// Alternatively, this is how to load Highcharts Stock. The Maps and Gantt
// packages are similar.

// Initialize exporting module.
@Component({
  selector: 'app-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.sass']
})
export class PopulationComponent implements OnInit {

  button_back_home_page = 'Back to Home Page';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goBack() {
    this.router.navigate(['/home'])
  }

}
