import { rest } from "msw";
import baseURL from "../utils/baseURL";

export const handlers = [
  rest.get(`${baseURL}/scoops`, (req, res, ctx) => {
    return ctx.json([
      { name: "Chocolate", imagePath: "/images/chocolate.png" },
      { name: "Vanilla", imagePath: "/images/vanilla.png" },
    ]);
  }),
];
