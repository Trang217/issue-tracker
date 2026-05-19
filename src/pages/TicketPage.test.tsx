import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TicketPage } from "./TicketPage";
import { expect, test } from "vitest";

test("show error when title is empty", async () => {
  const user = userEvent.setup();
  render(<TicketPage />);

  await user.click(
    screen.getByRole("button", {
      name: /create new ticket/i,
    }),
  );

  await user.type(screen.getByLabelText(/description/i), "Fix Main Heading");
  await user.type(screen.getByLabelText(/created by/i), "Jenny");
  await user.click(screen.getByRole("button", { name: /^create$/i }));

  expect(screen.getByText(/title is missing/i)).toBeInTheDocument();
});
