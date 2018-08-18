import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tradeService } from './trade.service';
import { Trade } from './interfaces/trade';

@Component({
  selector: 'my-trades',
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.css']
})
export class TradesComponent implements OnInit {
  trades: Trade[];
  selectedTrade: Trade;
  addingTrade = false;
  error: any;
  showNgFor = false;

  constructor(private router: Router, private tradeService: tradeService) {}

  gettrades(): void {
    this.tradeService
      .gettrades()
      .subscribe(
        trades => (this.trades = trades),
        error => (this.error = error)
      )
  }

  addtrade(): void {
    this.addingTrade = true;
    this.selectedTrade = null;
  }

  close(savedTrade: Trade): void {
    this.addingTrade = false;
    if (savedTrade) {
      this.gettrades();
    }
  }

  deletetrade(trade: Trade, event: any): void {
    event.stopPropagation();
    this.tradeService.delete(trade).subscribe(res => {
      this.trades = this.trades.filter(h => h !== trade);
      if (this.selectedTrade === trade) {
        this.selectedTrade = null;
      }
    }, error => (this.error = error));
  }

  ngOnInit(): void {
    this.gettrades();
  }

  onSelect(trade: Trade): void {
    this.selectedTrade = trade;
    this.addingTrade = false;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedTrade.id]);
  }
}
