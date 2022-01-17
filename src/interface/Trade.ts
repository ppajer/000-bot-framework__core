export interface ITrade {
    private executed: boolean;
    private orders: Array<Function>;
    public fromAsset: string;
    public fromAmount: number;
    public toAsset: string;
    public toAmount: number;
    public maxSpread?: number;
    public execute(): boolean;
}

class Trade implements ITrade {
    
    private executed = false;
    private orders = [];

    public fromAsset: string;
    public fromAmount: number;
    public toAsset: string;
    public toAmount: number;
    public maxSpread?: number;

    public execute(): boolean {
        return this.orders.reduce((successful, trade) => {
            if(trade()) successful++;
            return successful;
        }, 0);
    }
}