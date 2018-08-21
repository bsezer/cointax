import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TradeService } from '../../trade.service';
import { Trade } from '../../interfaces/trade';

@Component({
  selector: 'my-trades',
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.css']
})
export class TradesComponent implements OnInit {
  public trades: Trade[];
  public selectedTrade: Trade;
  public tradeToAdd: Trade;
  public editTradeId: number;
  error: any;
  showNgFor = false;
  selected = 'option2';

  constructor(private router: Router, private tradeService: TradeService) {}

  gettrades(): void {
    this.tradeService
      .gettrades()
      .subscribe(
        trades => (this.trades = trades),
        error => (this.error = error)
      )
  }

  events: string[] = [];

  addtrade(): void {
    this.selectedTrade = null;
    this.save();
  }

  close(savedTrade: Trade): void {
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

  edittrade(trade: Trade, event: any): void {
    event.stopPropagation();
    this.editTradeId = trade.id;
  }

  ngOnInit(): void {
    this.gettrades();
    this.editTradeId = -1;
    this.resetTradeToAdd();
  }

  onSelect(trade: Trade): void {
    this.selectedTrade = trade;
  }

  cancel(): void {
    this.resetTradeToAdd();
  }

  save(): void {
    console.log('Saving trade with id' + this.tradeToAdd.id);
    this.tradeService.save(this.tradeToAdd).subscribe(trade => {
      this.tradeToAdd = trade; // saved herro, w/ id if new
      this.trades.push(trade);
      this.resetTradeToAdd();
    }, error => (this.error = error)); // TODO: Display error message
  }

  resetTradeToAdd(): void {
    this.tradeToAdd = new Trade();
    this.tradeToAdd.tradeType = 'Trade';
    this.tradeToAdd.buyAmount = 0;
    this.tradeToAdd.buyCurrency = 'USD';
    this.tradeToAdd.sellAmount = 0;
    this.tradeToAdd.sellCurrency = 'BTC';
    this.tradeToAdd.tradingFeeCurrency = 'BTC';
    this.tradeToAdd.tradingFeeAmount = 0;
    this.tradeToAdd.transactionDate = '10-07-2018';
  }

  cancelEditTrade(): void {
    this.editTradeId = -1;
    this.gettrades();
    this.resetTradeToAdd();
  }
  
  saveEditTrade(trade: Trade, event: any): void {
    event.stopPropagation();
    console.log('Editing trade with id ' + trade.id);
    this.tradeService.save(trade).subscribe(tradeResponse => {
      this.trades.forEach(t => {
        if (t.id === trade.id) {
          t = trade;
        }
      });
      this.editTradeId = -1;
    }, error => (this.error = error)); // TODO: Display error message
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedTrade.id]);
  }
}
