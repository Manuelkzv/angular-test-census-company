import { PopulationComponent } from './population/population.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { FirstComponent } from './first/first.component';

const routes: Routes = [
  { path: 'population', component: PopulationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
