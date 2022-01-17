import { IExchange } from '../interface/Exchange';
import { ITrade } from '../interface/Trade';
import { IQuote } from '../interface/Quote';

export class Exchange implements IExchange {
    
    public name: string;
    public client: any;
    public market: string;
    public baseAsset: string;
    public quoteAsset: string;

    public constructor(config: any) {
        this.name = config.name;
        this.client = config.client;
        this.market = config.market || null;
        this.baseAsset = config.assets.base;
        this.quoteAsset = config.assets.quote;
    }

    public buy(amount: number, price?: number, maxSpread?: number): ITrade {
        return this.client.trade(this.quoteAsset, this.baseAsset, amount, price, maxSpread);
    }

    public sell(amount: number, price?: number, maxSpread?: number): ITrade {
        return this.client.trade(this.baseAsset, this.quoteAsset, amount, price, maxSpread);
    }

    public quote(side: string, amount: number, price?: number, maxSpread?: number): IQuote {
        let from: string;
        let to: string;
        if(side === 'buy') {
            from = this.quoteAsset;
            to = this.baseAsset;
        }
        return this.client.quote(from, to, price, maxSpread);
    }

    public orderbook(side: string): any[] {
        return this.client.orderbook();
    }

    public balance(asset: string): number {
        return this.client.balance(asset);
    }
}