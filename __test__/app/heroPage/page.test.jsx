import React from "react";
import { render, screen } from "@testing-library/react";
import HeroPage from "../../../app/heroPage/page";

describe("HeroPage", () => {
  it("renders the hero title", () => {
    render(<HeroPage />);
    const heroTitle = screen.getByText(/Data to enrich your online business/i);
    expect(heroTitle).toBeInTheDocument();
  });

  it("renders the hero subtitle", () => {
    render(<HeroPage />);
    const heroSubtitle = screen.getByText(
      /Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua./i
    );
    expect(heroSubtitle).toBeInTheDocument();
  });
});
