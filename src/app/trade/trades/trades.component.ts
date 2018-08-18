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
  addingTrade = false;
  error: any;
  showNgFor = false;

  constructor(private router: Router, private tradeService: TradeService) {}

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

  edittrade(trade: Trade, event: any): void {
    event.stopPropagation();
    this.editTradeId = trade.id;
  }

  ngOnInit(): void {
    this.gettrades();
    this.editTradeId = -1;
    this.tradeToAdd = new Trade();
  }

  onSelect(trade: Trade): void {
    this.selectedTrade = trade;
    this.addingTrade = false;
  }

  cancel(): void {
    this.tradeToAdd = new Trade()
    this.addingTrade = false;
  }

  save(): void {
    console.log('Saving trade with id' + this.tradeToAdd.id);
    this.tradeService.save(this.tradeToAdd).subscribe(trade => {
      this.tradeToAdd = trade; // saved herro, w/ id if new
      this.trades.push(trade);
      this.tradeToAdd = new Trade();
      this.addingTrade = false;
    }, error => (this.error = error)); // TODO: Display error message
  }

  cancelEditTrade(): void {
    this.editTradeId = -1;
    this.gettrades();
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
