export class Trade {
    id?: number;
    name: string;
    tradeType: string;
    transactionDate: any;
    buyAmount: number;
    buyCurrency: string;
    sellAmount: number;
    sellCurrency: string;
    tradingFeeAmount: number;
    tradingFeeCurrency: string;
    other: string;
}