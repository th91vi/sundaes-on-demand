import { render, screen, waitFor } from "@testing-library/react";
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

  await waitFor(async () => {
    const alerts = await screen.findAllByRole("alert");

    expect(alerts).toHaveLength(2);
  });
});
