import React from "react";
import { render, screen } from "@testing-library/react";
import { Box } from "./Box";

describe("Box Component", () => {
  it("renders with basic display prop", () => {
    render(<Box display="flex">Test content</Box>);
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("renders with responsive display props", () => {
    render(
      <Box
        display={{
          xs: "block",
          sm: "flex",
          md: "grid",
        }}
      >
        Responsive content
      </Box>
    );
    expect(screen.getByText("Responsive content")).toBeInTheDocument();
  });

  it("renders as custom element", () => {
    render(
      <Box as="button" display="inline-block">
        Button
      </Box>
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Button");
  });

  it("applies custom styles", () => {
    render(
      <Box display="block" backgroundColor="red" color="white" padding="20px">
        Styled content
      </Box>
    );
    expect(screen.getByText("Styled content")).toBeInTheDocument();
  });
});
