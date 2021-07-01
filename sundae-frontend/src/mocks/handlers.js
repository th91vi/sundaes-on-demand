import { rest } from "msw";

const baseURL = "http://localhost:3030";

export const handlers = [
  rest.get(`${baseURL}/scoops`, (req, res, ctx) => {
    return ctx.json([
      { name: "Chocolate", imagePath: "/images/chocolate.png" },
      { name: "Vanilla", imagePath: "/images/vanilla.png" },
    ]);
  }),
];
