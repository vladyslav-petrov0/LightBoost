import { introHandler } from './handlers/intro/introHandler.js';
import { limitedSaleHandler } from './handlers/limitedSale/limitedSaleHandler.js';

export const handlers = [introHandler(), limitedSaleHandler()];
