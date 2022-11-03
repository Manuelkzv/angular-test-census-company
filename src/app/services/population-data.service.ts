import { Injectable } from '@angular/core';

import { PopulationData } from "./population-data";

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PopulationDataService {

  private url = "https://datausa.io/api/data?drilldowns=State&measures=Population";

  constructor(private http: HttpClient,) {
  }

  getPopulationData(): Observable<PopulationData[]> {

    return this.http.get<any>(this.url)
      .pipe(
        tap(data =>
          console.log(data.data)
        ),
        catchError(this.handleError<PopulationData[]>('getPopulationData', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      return of(result as T);
    };
  }

}