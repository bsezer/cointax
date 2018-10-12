import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Trade, Transaction } from '../../../interfaces/trade';

@Component({
  selector: 'my-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  @Input() public transaction: Transaction;
  @Input() public isEditMode: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }
}
