import { setupServer } from "msw/node";
import { rest } from "msw";

const handler = [
  rest.get("/api/name/:name", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ name: req.params.name }));
  }),
];

export const server = setupServer(...handler);
