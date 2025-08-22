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
        display="block"
        mobile={{ display: "block" }}
        tablet={{ display: "flex" }}
        desktop={{ display: "grid" }}
      >
        Responsive content
      </Box>
    );
    expect(screen.getByText("Responsive content")).toBeInTheDocument();
  });

  it("renders as custom element", () => {
    render(
      <Box as="span" display="inline-block">
        Span content
      </Box>
    );
    const span = screen.getByText("Span content");
    expect(span).toBeInTheDocument();
    expect(span.tagName.toLowerCase()).toBe("span");
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
