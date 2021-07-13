import { render, screen } from "@testing-library/react";
import OrderEntry from "../OrderEntry";
import { rest } from "msw";
import { server } from "../../../mocks/server";
import baseURL from "../../../utils/baseURL";

test("handles error for scoops and toppings route", async () => {
  server.resetHandlers(
    rest.get(`${baseURL}/scoops`, (req, res, ctx) => res(ctx.status(500))),
    rest.get(`${baseURL}/toppings`, (req, res, ctx) => res(ctx.status(500)))
  );

  render(<OrderEntry />);

  const alerts = await screen.findAllByRole("alert", {
    name: "An unexpected error ocurred. Please try again later.",
  });

  expect(alerts).toHaveLength(2);
});
