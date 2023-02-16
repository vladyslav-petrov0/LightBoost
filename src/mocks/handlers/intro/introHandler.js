import { rest } from 'msw';

import { introItems } from './introItems';

const getStatusWithPossibleError = () => [400, 200][Math.round(Math.random())];

export const introHandler = () =>
  rest.get('/api/intro/items', (req, res, ctx) => {
    return res(ctx.delay(3000), ctx.json(introItems), ctx.status(getStatusWithPossibleError()));
  });
