import { Trade } from './interfaces/trade';

export class InMemoryDataService {
  createDb() {
    const trades: Trade[] = [
      {
        id: 1,
        name: 'Bob the king',
        tradeType: "Trade",
        transactionDate: "10-07-2018",
        buy: {
          amount : 20,
          currency : "BTC"
        },
        sell: {
          amount : 2000,
          currency : "USD"
        },
        tradingFee: {
          amount : 20,
          currency : "USD"
        },
        other: "Lorem ipsum dolor sit amet, ex dolorem officiis convenire usu."
      },
      {
        id: 2,
        name: 'Nicholas DuBuque',
        tradeType: "Trade",
        transactionDate: "10-09-2018",
        buy: {
          amount : 3,
          currency : "BTC"
        },
        sell: {
          amount : 400,
          currency : "USD"
        },
        tradingFee: {
          amount : 10,
          currency : "USD"
        },
        other: "Ex dolorem officiis convenire usu."
      },
      {
        id: 3,
        name: 'Niche Name',
        tradeType: "Trade",
        transactionDate: "12-07-2018",
        buy: {
          amount : 50,
          currency : "ETH"
        },
        sell: {
          amount : 280,
          currency : "USD"
        },
        tradingFee: {
          amount : 10,
          currency : "USD"
        },
        other: "Officiis convenire usu."
      },
      {
        id: 4,
        name: 'Brock Lesner',
        tradeType: "Trade",
        transactionDate: "7-07-2018",
        buy: {
          amount : 2,
          currency : "BTC"
        },
        sell: {
          amount : 800,
          currency : "USD"
        },
        tradingFee: {
          amount : 2,
          currency : "USD"
        },
        other: "Ipsum dolor sit amet, convenire usu."
      },
      {
        id: 5,
        name: 'Nicholas DuBuque',
        tradeType: "Trade",
        transactionDate: "9-07-2018",
        buy: {
          amount : 15,
          currency : "ETH"
        },
        sell: {
          amount : 20,
          currency : "USD"
        },
        tradingFee: {
          amount : 20,
          currency : "USD"
        },
        other: "Lorem ipsum dolor sit amet, ex dolorem officiis convenire usu."
      },
      {
        id: 6,
        name: 'Bob the king',
        tradeType: "Trade",
        transactionDate: "10-07-2018",
        buy: {
          amount : 20,
          currency : "BTC"
        },
        sell: {
          amount : 2000,
          currency : "USD"
        },
        tradingFee: {
          amount : 20,
          currency : "USD"
        },
        other: "Lorem ipsum dolor sit amet, ex dolorem officiis convenire usu."
      },
      {
        id: 7,
        name: 'Nicholas DuBuque',
        tradeType: "Trade",
        transactionDate: "10-09-2018",
        buy: {
          amount : 3,
          currency : "BTC"
        },
        sell: {
          amount : 400,
          currency : "USD"
        },
        tradingFee: {
          amount : 10,
          currency : "USD"
        },
        other: "Ex dolorem officiis convenire usu."
      },
      {
        id: 8,
        name: 'Niche Name',
        tradeType: "Trade",
        transactionDate: "12-07-2018",
        buy: {
          amount : 50,
          currency : "ETH"
        },
        sell: {
          amount : 34,
          currency : "USD"
        },
        tradingFee: {
          amount : 8,
          currency : "USD"
        },
        other: "Officiis convenire usu."
      },
      {
        id: 9,
        name: 'Brock Lesner',
        tradeType: "Trade",
        transactionDate: "7-07-2018",
        buy: {
          amount : 6,
          currency : "BTC"
        },
        sell: {
          amount : 800,
          currency : "USD"
        },
        tradingFee: {
          amount : 8,
          currency : "USD"
        },
        other: "Ipsum dolor sit amet, convenire usu."
      },
      {
        id: 10,
        name: 'Nicholas DuBuque',
        tradeType: "Trade",
        transactionDate: "9-07-2018",
        buy: {
          amount : 15,
          currency : "ETH"
        },
        sell: {
          amount : 67,
          currency : "USD"
        },
        tradingFee: {
          amount : 23,
          currency : "USD"
        },
        other: "Lorem ipsum dolor sit amet, ex dolorem officiis convenire usu."
      },
      {
        id: 11,
        name: 'Bob the king',
        tradeType: "Trade",
        transactionDate: "10-07-2018",
        buy: {
          amount : 20,
          currency : "BTC"
        },
        sell: {
          amount : 30,
          currency : "USD"
        },
        tradingFee: {
          amount : 5,
          currency : "USD"
        },
        other: "Lorem ipsum dolor sit amet, ex dolorem officiis convenire usu."
      },
      {
        id: 12,
        name: 'Nicholas DuBuque',
        tradeType: "Trade",
        transactionDate: "10-09-2018",
        buy: {
          amount : 3,
          currency : "BTC"
        },
        sell: {
          amount : 400,
          currency : "USD"
        },
        tradingFee: {
          amount : 5,
          currency : "USD"
        },
        other: "Ex dolorem officiis convenire usu."
      },
      {
        id: 13,
        name: 'Niche Name',
        tradeType: "Trade",
        transactionDate: "12-07-2018",
        buy: {
          amount : 30,
          currency : "ETH"
        },
        sell: {
          amount : 20,
          currency : "USD"
        },
        tradingFee: {
          amount : 5,
          currency : "USD"
        },
        other: "Officiis convenire usu."
      },
      {
        id: 14,
        name: 'Brock Lesner',
        tradeType: "Trade",
        transactionDate: "7-07-2018",
        buy: {
          amount : 3,
          currency : "BTC"
        },
        sell: {
          amount : 20,
          currency : "ETH"
        },
        tradingFee: {
          amount : 5,
          currency : "USD"
        },
        other: "Ipsum dolor sit amet, convenire usu."
      },
      {
        id: 15,
        name: 'Nicholas DuBuque',
        tradeType: "Trade",
        transactionDate: "9-07-2018",
        buy: {
          amount : 15,
          currency : "ETH"
        },
        sell: {
          amount : 3,
          currency : "BTC"
        },
        tradingFee: {
          amount : 50,
          currency : "USD"
        },
        other: "Lorem ipsum dolor sit amet, ex dolorem officiis convenire usu."
      }
    ];
    return { trades };
  }
}
