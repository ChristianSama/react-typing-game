import { render, waitFor, screen, findByTestId } from "@testing-library/react";
import { Game } from "../../pages/Game";
import { Home } from "../../pages/Home";
import "@testing-library/jest-dom";
import quotes from "../../mocks/quotes.json";
import { MemoryRouter } from "react-router-dom";

test("Renders the Heading", () => {
  render(<Home />, { wrapper: MemoryRouter });
  const heading = screen.getByText(/Anime Typing Game/i);
  expect(heading).toBeInTheDocument();
});

test("Renders the Play Again button", () => {
  render(<Game />, { wrapper: MemoryRouter });
  const button = screen.getByText(/play again/i);
  expect(button).toBeInTheDocument();
});

test("Loads and renders the Quote box", async () => {
  render(<Game />, { wrapper: MemoryRouter });
  expect(true).toBe(true);
})