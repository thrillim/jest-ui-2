import React from "react";
import { render, screen } from "@testing-library/react";
import TopNewsPage from "../../../app/top/page";

test("TopNewsPage", async () => {
  render(<TopNewsPage />);
  // Wait for the news articles to be rendered
  const heading = await screen.findByRole("heading", { name: "Top News" });
  // Make your assertion
  expect(heading).toBeInTheDocument();
});
