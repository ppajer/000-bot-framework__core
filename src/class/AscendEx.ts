import { ascendex } from "ccxt";
import { IExchange } from "../interface/Exchange";

export class AscendEx implements IExchange {

    public name = 'ascendex';
    public market: string;
    public baseAsset: string;
    public quoteAsset: string;
    
    protected client: ascendex;
    
    private key: string;
    private secret: string;

    public constructor(apiKey: string, secret: string, market: string) {
        this.key = apiKey;
        this.secret = secret;
        this.market = market;
        this.client = new ascendex({
            apiKey,
            secret
        });
    }
    
    public async buy(amount: number, price?: number, maxSpread?: number) {
        const orders = [async function() {
            await this.client.createOrder(this.market, 'limit', 'buy', amount, price);
        }.bind(this)];
        return new Trade(res);
    }
}