import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TradeService } from '../../trade.service';
import { Trade } from '../../interfaces/trade';

@Component({
  selector: 'my-trade-detail',
  templateUrl: './trade-detail.component.html',
  styleUrls: ['./trade-detail.component.css']
})
export class TradeDetailComponent implements OnInit {
  @Input() trade: Trade;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here

  constructor(
    private tradeService: TradeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('Here');
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id = +params['id'];
        this.navigated = true;
        this.tradeService.gettrade(id).subscribe(trade => (this.trade = trade));
      } else {
        this.navigated = false;
        this.trade = new Trade();
      }
    });
  }

  save(): void {
    this.tradeService.save(this.trade).subscribe(trade => {
      this.trade = trade; // saved herro, w/ id if new
      this.goBack(trade);
    }, error => (this.error = error)); // TODO: Display error message
  }

  goBack(savedtrade: Trade = null): void {
    this.close.emit(savedtrade);
    if (this.navigated) {
      window.history.back();
    }
  }
}
