export interface IStrategy {
    onTick(): void;
    execute(): void;
}