import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Game } from "../../pages/Game";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

test("Loads and renders the Quote box", async () => {
  render(<Game />, { wrapper: MemoryRouter });
  const quoteBox = await screen.findByTestId("quote-box");
  expect(quoteBox).toBeInTheDocument();
});

test("Renders the Play Again button", () => {
  render(<Game />, { wrapper: MemoryRouter });
  const button = screen.getByText(/play again/i);
  expect(button).toBeInTheDocument();
});

test("Renders the result page when the user input is same as quote", async () => {
  render(<Game />, { wrapper: MemoryRouter });
  await waitFor(() => {
    expect(screen.getByTestId("quote-box")).toBeInTheDocument();
  })
  const userInput = screen.getByRole("textbox");
  fireEvent.change(userInput, {target: {value: "I will be Hokage"}})
  const results = screen.getByText("You just typed a quote from:");
  expect(results).toBeInTheDocument();
});
