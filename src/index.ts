import { Exchange } from "./class/Exchange";
import { IStrategy } from "./interface/Strategy";

function Build(exchanges: Array<Exchange>, strategy: IStrategy) {
    const bot = new Bot();
    exchanges.map(bot.addExchange);
    bot.setStrategy(strategy);
    bot.init();

    return bot;
}

module.exports = {
    Build
}