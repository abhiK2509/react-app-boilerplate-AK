import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

test("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
});

test("Should load button inside contact component", () => {
    render(<Contact />);
    const heading = screen.getByRole('button');
    expect(heading).toBeInTheDocument();
});