import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  switchMap
} from 'rxjs/operators';
import { tradeSearchService } from './trade-search.service';
import { Trade } from './interfaces/trade';

@Component({
  selector: 'my-trade-search',
  templateUrl: './trade-search.component.html',
  styleUrls: ['./trade-search.component.css'],
  providers: [tradeSearchService]
})
export class tradeSearchComponent implements OnInit {
  trades: Observable<Trade[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private tradeSearchService: tradeSearchService,
    private router: Router
  ) {}

  search(term: string): void {
    // Push a search term into the observable stream.
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.trades = this.searchTerms.pipe(
      debounceTime(300), // wait for 300ms pause in events
      distinctUntilChanged(), // ignore if next search term is same as previous
      switchMap(
        term =>
          term // switch to new observable each time
            ? // return the http search observable
              this.tradeSearchService.search(term)
            : // or the observable of empty trades if no search term
              of<Trade[]>([])
      ),
      catchError(error => {
        // TODO: real error handling
        console.log(`Error in component ... ${error}`);
        return of<Trade[]>([]);
      })
    );
  }

  gotoDetail(trade: Trade): void {
    const link = ['/detail', trade.id];
    this.router.navigate(link);
  }
}
