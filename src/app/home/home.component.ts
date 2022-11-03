import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  title = 'angular-test-census-company';
  h1_label = 'WELCOME TO THE USA POPULATION DATA APP';
  button_population_page = 'Population Page';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToPopulation () {
    this.router.navigate(['/population'])
  }
}
