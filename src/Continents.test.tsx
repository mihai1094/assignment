import * as React from "react";
import { render, screen } from "@testing-library/react";

import Continents from "./Continents";

it("should display Africa in the list of the Continents", async () => {
  render(<Continents />);

  const item = await screen.findAllByText("Africa");

  expect(item).toBe("Africa");
});
