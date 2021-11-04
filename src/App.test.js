import { render, getByTestId } from "@testing-library/react";
import App from "./App";

test("renders nav", () => {
  render(<App />);
  expect(
    getByTestId(document.documentElement, "nav-element")
  ).toBeInTheDocument();
});
