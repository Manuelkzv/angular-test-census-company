import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PopulationComponent } from './population/population.component';
import { HomeComponent } from './home/home.component';

import { OutputGraphComponent } from './output-graph/output-graph.component';

import { MatButtonModule } from '@angular/material/button';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PopulationComponent,
    HomeComponent,
    OutputGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatButtonModule
  ],
})
export class AppModule { }
