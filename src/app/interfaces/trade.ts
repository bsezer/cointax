export class Trade {
    id?: number;
    name: string;
    tradeType: string;
    transactionDate: any;
    buy: Transaction;
    sell: Transaction;
    tradingFee: Transaction;
    other: string;
}


export class Transaction {
    amount: number;
    currency: string;
}
