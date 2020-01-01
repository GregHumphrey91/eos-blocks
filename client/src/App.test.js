import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App.js Test Suite", () => {
  test("Renders the App component", () => {
    const { getByText, container, asFragment } = render(<App />);
    const linkElement = getByText("Home");
    expect(linkElement).toBeInTheDocument();
  });
});
