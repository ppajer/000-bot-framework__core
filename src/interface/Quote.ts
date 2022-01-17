export interface IQuote {
    fromAsset: string;
    fromAmount: number;
    toAsset: string;
    toAmount: number;
    maxSpread?: number;
}
