import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


import { PopulationDataService } from "../services/population-data.service";
import { PopulationData } from "../services/population-data";

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-output-graph',
  templateUrl: './output-graph.component.html',
  styleUrls: ['./output-graph.component.sass']
})

export class OutputGraphComponent implements OnInit {

  startYear: Number = 2015
  endYear: Number = 2020

  drillDownSelected: String = "State"

  public options: any = {
    chart: {
      type: 'line'
    },
    title: {
      align: 'left',
      text: 'Population from ' + this.startYear + ' to ' + this.endYear
    },
    subtitle: {
      align: 'left',
      text: 'Click the labels to toggle the line charts'
    },
    accessibility: {
      announceNewData: {
        enabled: true
      }
    },
    xAxis: {
      categories: []
    },
    yAxis: {
      title: {
        text: 'Population'
      }

    },
    legend: {
      enabled: true
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true
        },
        enableMouseTracking: false
      }
    },
    series: [],
  }

  populationData: any
  populationDataObject: PopulationData[] = []

  constructor(
    private populationDataService: PopulationDataService
  ) { }

  ngOnInit() {
    this.getPopulation()
  }

  getPopulation(): void {
    this.populationDataService.getPopulationData()
      .subscribe(data => {
        this.populationData = data;
        this.generateXAxys()
        this.formatData(this.populationData.data)
      });
  }

  generateXAxys(): void {
    const xAxysLabels: any[] = [];
    for (let index: any = this.startYear; index <= this.endYear; index++) {
      console.log(index)
      xAxysLabels.push(index)
    }

    this.options.xAxis.categories = xAxysLabels
  }

  formatData(records: any[]): void {
    const updated_normal_data: any = {};

    this.options.subtitle.text = this.options.subtitle.text + ". Source: " + this.populationData.source[0].annotations.source_name
    console.log(this.populationData.source[0].annotations.source_name)
    records.reverse().forEach((item) => {
      if (item['ID Year'] >= this.startYear && item['ID Year'] <= this.endYear) {

        if (updated_normal_data[item['State']]) {
          updated_normal_data[item['State']].data.push(item['Population'])
        }
        else {
          updated_normal_data[item['State']] = {
            data: [item['Population']]
          }
        }
      }
    });

    console.log(updated_normal_data)
    
    for (const property in updated_normal_data) {

      this.options.series.push({
        name: property,
        data: updated_normal_data[property].data

      })
    }

    Highcharts.chart('container', this.options);

  }
}