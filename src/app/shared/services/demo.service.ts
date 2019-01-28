import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import * as DemoModel from '../models/demo.model';
import { Subject } from 'rxjs';

const API_URL = environment.demo_api;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getWeather(): Observable<DemoModel.Demo.OpenWeatherMap> {
    const url = API_URL;
    return this.httpClient
      .get<DemoModel.Demo.OpenWeatherMap>(url, httpOptions)
      .pipe(
        tap(
          response => {
            return response;
          },
          () => catchError(this.handleError)
        )
      );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
