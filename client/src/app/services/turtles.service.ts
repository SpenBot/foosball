import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { TurtleModel } from '../models/turtle.model';

@Injectable({
  providedIn: 'root'
})

export class TurtlesService {

  constructor(private http: HttpClient) { }

  // private TURTLE_URL = 'http://tmnt-api:3000/api/turtles';
  private TURTLE_URL = 'http://localhost:3002/api/turtles';

  getAllTurtles (): Observable<TurtleModel[]> {
    return this.http.get<TurtleModel[]>(this.TURTLE_URL)
      .pipe(
          catchError( (err: HttpErrorResponse) => {
              console.error('ERROR - Service : Get All Turtles', err);
              return throwError(err);
          })
      );
  }

}
