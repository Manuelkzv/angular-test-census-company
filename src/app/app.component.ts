import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-test-census-company';
  h1_label = 'WELCOME TO THE USA POPULATION DATA APP';
  button_population_page = 'Population page';


}

goToPopulation = function () {
  this.router.navigate(['/user']);
};
