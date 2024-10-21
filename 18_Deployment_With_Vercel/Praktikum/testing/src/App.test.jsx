import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the correct title", () => {
    render(<App />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("does not render the count or buttons", () => {
    render(<App />);
    expect(screen.queryByText(/count is/i)).not.toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
