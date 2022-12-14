// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Other imports
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { PopulationDataService } from './population-data.service';

const mockResponse = {
  "data": [
    {
      "ID State": "04000US01",
      "State": "Alabama",
      "ID Year": 2020,
      "Year": "2020",
      "Population": 4893186,
      "Slug State": "alabama"
    },
    {
      "ID State": "04000US02",
      "State": "Alaska",
      "ID Year": 2020,
      "Year": "2020",
      "Population": 736990,
      "Slug State": "alaska"
    }]
};

describe('Wikipedia search service', () => {

  let httpClient
  let httpTestingController: any
  let populationDataService: any

  beforeEach(() => {
    TestBed.configureTestingModule({
      // Import the HttpClient mocking services
      imports: [HttpClientTestingModule],
      // Provide the service-under-test and its dependencies
      providers: [
        PopulationDataService
      ]
    });

    // Inject the http, test controller, and service-under-test
    // as they will be referenced by each test.
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    populationDataService = TestBed.get(PopulationDataService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should get search results', () => {

    populationDataService.getPopulationData().subscribe(
      data => {
        expect(data).not.toBeNull()
      }
    );

    // Check for correct requests: should have made one request to GET search from expected URL
    const req = httpTestingController.expectOne(populationDataService.getPopulationDataUrl);
    expect(req.request.method).toEqual('GET');

    // Provide each request with a mock response
    req.flush(mockResponse);
  });

  // TEST ERROR CASES BY MOCKING ERROR RESPONSE
  it('should turn 404 into an empty result', () => {
    // respond with an error to test how its handled, in this case a 404
    const msg = 'nothing found';

    let response: any;
    let errResponse: any;

    const mockErrorResponse = { status: 400, statusText: 'Bad Request' };

    const data = 'Invalid request parameters';

    populationDataService.getPopulationData().subscribe(res => response = res, err => errResponse = err);
    httpTestingController.expectOne('https://datausa.io/api/data?drilldowns=State&measures=Population').flush(data, mockErrorResponse);
    expect(errResponse).toBeUndefined();

  });
});