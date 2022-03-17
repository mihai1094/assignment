import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import App from "./App";

it("should display No countries text when no data is available", async () => {
  render(<App />);

  const item = await screen.findAllByText("No countries to display.");
  expect(item[0].textContent).toBe("No countries to display.");
});

it("should display Keyword Title to the page", async () => {
  render(<App />);

  const item = await screen.findByText("Keyword");
  expect(item.textContent).toBe("Keyword");
});

it("should display Search button to the page", async () => {
  render(<App />);

  const item = await screen.findByText("Search");
  expect(item.textContent).toBe("Search");
});
