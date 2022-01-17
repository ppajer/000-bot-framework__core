import { ITrade } from './Trade';
import { IQuote } from './Quote';

export interface IExchange {
    name: string;
    client: any;
    market?: string;
    baseAsset: string;
    quoteAsset: string;
    buy(amount: number, price?: number, maxSpread?: number): ITrade;
    sell(amount: number, price?: number, maxSpread?: number): ITrade;
    quote(side: string, amount: number, price?: number, maxSpread?: number): IQuote;
    balance(asset: string): number;
    orderbook(side: string): Array<any>;
}