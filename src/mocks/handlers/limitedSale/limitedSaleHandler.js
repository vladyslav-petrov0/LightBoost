import { rest } from 'msw';

const limitedSaleItem = {
  title: 'BURNING CRUSSADE',
  price: { old: 300, new: 279 },
  description: 'CLASSIC TBC LEVELING',
  background: 'https://i.ibb.co/c6K4xTz/bg.jpg',
  startTime: 3000,
  id: 'limited-sale_1'
};

export const limitedSaleHandler = () =>
  rest.get('/api/limited-sale', (req, res, ctx) => {
    return res(ctx.delay(), ctx.json(limitedSaleItem), ctx.status(200));
  });
