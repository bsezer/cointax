import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Trade } from './interfaces/trade';

@Injectable()
export class TradeService {
  private tradesUrl = 'app/trades'; // URL to web api

  constructor(private http: HttpClient) {}

  gettrades() {
    return this.http
      .get<Trade[]>(this.tradesUrl)
      .pipe(map(data => data), catchError(this.handleError));
  }

  gettrade(id: number): Observable<Trade> {
    return this.gettrades().pipe(
      map(trades => trades.find(trade => trade.id === id))
    );
  }

  save(trade: Trade) {
    if (trade.id) {
      return this.put(trade);
    }
    return this.post(trade);
  }

  delete(trade: Trade) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.tradesUrl}/${trade.id}`;

    return this.http.delete<Trade>(url).pipe(catchError(this.handleError));
  }

  // Add new trade
  private post(trade: Trade) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post<Trade>(this.tradesUrl, trade)
      .pipe(catchError(this.handleError));
  }

  // Update existing trade
  private put(trade: Trade) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.tradesUrl}/${trade.id}`;

    return this.http.put<Trade>(url, trade).pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
