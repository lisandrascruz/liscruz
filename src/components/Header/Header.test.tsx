import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Home tests", () => {
  it("should contains the text 'Lis' as logo", () => {
    render(<Header />);

    const logo = screen.getByText("Lis");

    expect(logo).toBeInTheDocument();
  });

  it.todo("should verify if the logo has '8em' as size");
});
