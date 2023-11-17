import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import HeroPage from "../../../app/heroPage/page";

describe("HeroPage title and subtitle", () => {
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

describe("HeroPage Get started button", () => {
  it("color of button", () => {
    render(<HeroPage />);
    const getStartedButton = screen.getByText(/Get Started/i);
    fireEvent.mouseEnter(getStartedButton);
    expect(getStartedButton).toHaveClass("hover:bg-indigo-500");
    fireEvent.mouseLeave(getStartedButton);
    expect(getStartedButton).toHaveClass("bg-indigo-600");
  });
})

