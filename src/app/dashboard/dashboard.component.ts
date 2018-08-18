import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TradeService } from '.././trade.service';
import { Trade } from '../interfaces/trade';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  trades: Trade[] = [];

  constructor(
    private router: Router,
    private tradeService: TradeService) {
  }

  ngOnInit(): void {
    this.tradeService.gettrades()
      .subscribe(trades => this.trades = trades.slice(1, 5));
  }

  gotoDetail(trade: Trade): void {
    const link = ['/detail', trade.id];
    this.router.navigate(link);
  }
}
