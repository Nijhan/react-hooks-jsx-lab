// ✅ src/__tests__/Home.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'; // ✅ Import custom matchers
import Home from "../components/Home";

test("renders a div with the correct ID", () => {
  const { container } = render(<Home />);
  expect(container.querySelector("#home")).toBeInTheDocument();
});

test("renders the h1 with the text 'Name is a Web Developer from City'", () => {
  render(<Home />);
  const h1 = screen.queryByText("Name is a Web Developer from City");
  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe("H1");
});

test("the h1 has an inline style attribute with a color of 'firebrick'", () => {
  render(<Home />);
  const h1 = screen.queryByText("Name is a Web Developer from City");
  expect(h1).toHaveStyle({ color: "firebrick" });
});
