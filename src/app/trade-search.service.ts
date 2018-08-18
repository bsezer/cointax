import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Trade } from './interfaces/trade';

@Injectable()
export class tradeSearchService {
  constructor(private http: HttpClient) {}

  search(term: string): Observable<Trade[]> {
    return this.http
      .get<Trade[]>(`app/trades/?name=${term}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return observableThrowError(res.error || 'Server error');
  }
}
