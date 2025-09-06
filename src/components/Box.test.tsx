import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Box } from "./Box";

// Mock the CSS module
jest.mock("./Box.module.css", () => ({
  bx_display: "bx_display",
  bx_flexDirection: "bx_flexDirection",
  bx_justifyContent: "bx_justifyContent",
  bx_alignItems: "bx_alignItems",
  bx_padding: "bx_padding",
  bx_margin: "bx_margin",
  bx_backgroundColor: "bx_backgroundColor",
  bx_color: "bx_color",
  bx_hasMirror: "bx_hasMirror",
  bx_display_mobile: "bx_display_mobile",
  bx_display_tablet: "bx_display_tablet",
  bx_display_desktop: "bx_display_desktop",
  bx_flexDirection_mobile: "bx_flexDirection_mobile",
  bx_flexDirection_tablet: "bx_flexDirection_tablet",
  bx_flexDirection_desktop: "bx_flexDirection_desktop",
  bx_justifyContent_tablet: "bx_justifyContent_tablet",
  bx_alignItems_desktop: "bx_alignItems_desktop",
  bx_gridTemplateColumns_tablet: "bx_gridTemplateColumns_tablet",
  bx_margin_desktop: "bx_margin_desktop",
  bx_padding_mobile: "bx_padding_mobile",
  bx_padding_tablet: "bx_padding_tablet",
  bx_padding_desktop: "bx_padding_desktop",
}));

// Use the mocked styles directly
const styles = {
  bx_display: "bx_display",
  bx_flexDirection: "bx_flexDirection",
  bx_justifyContent: "bx_justifyContent",
  bx_alignItems: "bx_alignItems",
  bx_padding: "bx_padding",
  bx_margin: "bx_margin",
  bx_backgroundColor: "bx_backgroundColor",
  bx_color: "bx_color",
  bx_hasMirror: "bx_hasMirror",
  bx_display_mobile: "bx_display_mobile",
  bx_display_tablet: "bx_display_tablet",
  bx_display_desktop: "bx_display_desktop",
  bx_flexDirection_mobile: "bx_flexDirection_mobile",
  bx_flexDirection_tablet: "bx_flexDirection_tablet",
  bx_flexDirection_desktop: "bx_flexDirection_desktop",
  bx_justifyContent_tablet: "bx_justifyContent_tablet",
  bx_alignItems_desktop: "bx_alignItems_desktop",
  bx_gridTemplateColumns_tablet: "bx_gridTemplateColumns_tablet",
  bx_margin_desktop: "bx_margin_desktop",
  bx_padding_mobile: "bx_padding_mobile",
  bx_padding_tablet: "bx_padding_tablet",
  bx_padding_desktop: "bx_padding_desktop",
};

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

  describe("CSS Classes", () => {
    it("applies basic CSS classes correctly", () => {
      render(
        <Box display="flex" flexDirection="column" padding="20px">
          Test content
        </Box>
      );
      const boxElement = screen.getByText("Test content");

      expect(boxElement).toHaveClass(styles.bx_display);
      expect(boxElement).toHaveClass(styles.bx_flexDirection);
      expect(boxElement).toHaveClass(styles.bx_padding);
    });

    it("applies responsive CSS classes correctly", () => {
      render(
        <Box
          display="block"
          mobile={{ display: "flex", flexDirection: "column" }}
          tablet={{ display: "grid", justifyContent: "center" }}
          desktop={{ display: "flex", alignItems: "center" }}
        >
          Responsive content
        </Box>
      );
      const boxElement = screen.getByText("Responsive content");

      // Base classes
      expect(boxElement).toHaveClass(styles.bx_display);

      // Mobile classes
      expect(boxElement).toHaveClass(styles.bx_display_mobile);
      expect(boxElement).toHaveClass(styles.bx_flexDirection_mobile);

      // Tablet classes
      expect(boxElement).toHaveClass(styles.bx_display_tablet);
      expect(boxElement).toHaveClass(styles.bx_justifyContent_tablet);

      // Desktop classes
      expect(boxElement).toHaveClass(styles.bx_display_desktop);
      expect(boxElement).toHaveClass(styles.bx_alignItems_desktop);
    });

    it("applies hasMirror class when hasMirror prop is true", () => {
      render(
        <Box hasMirror={true} display="flex">
          Mirrored content
        </Box>
      );
      const boxElement = screen.getByText("Mirrored content");

      expect(boxElement).toHaveClass(styles.bx_hasMirror);
      expect(boxElement).toHaveClass(styles.bx_display);
    });

    it("does not apply hasMirror class when hasMirror prop is false", () => {
      render(
        <Box hasMirror={false} display="flex">
          Normal content
        </Box>
      );
      const boxElement = screen.getByText("Normal content");

      expect(boxElement).not.toHaveClass(styles.bx_hasMirror);
      expect(boxElement).toHaveClass(styles.bx_display);
    });

    it("combines custom className with generated classes", () => {
      render(
        <Box display="flex" className="custom-class">
          Custom class content
        </Box>
      );
      const boxElement = screen.getByText("Custom class content");

      expect(boxElement).toHaveClass("custom-class");
      expect(boxElement).toHaveClass(styles.bx_display);
    });

    it("handles multiple CSS properties correctly", () => {
      render(
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          padding="20px"
          margin="10px"
          backgroundColor="red"
          color="white"
        >
          Multi-property content
        </Box>
      );
      const boxElement = screen.getByText("Multi-property content");

      expect(boxElement).toHaveClass(styles.bx_display);
      expect(boxElement).toHaveClass(styles.bx_flexDirection);
      expect(boxElement).toHaveClass(styles.bx_justifyContent);
      expect(boxElement).toHaveClass(styles.bx_alignItems);
      expect(boxElement).toHaveClass(styles.bx_padding);
      expect(boxElement).toHaveClass(styles.bx_margin);
      expect(boxElement).toHaveClass(styles.bx_backgroundColor);
      expect(boxElement).toHaveClass(styles.bx_color);
    });

    it("does not apply classes for falsy values", () => {
      render(
        <Box
          display="flex"
          flexDirection={undefined}
          padding={null as any}
          margin=""
          backgroundColor={false as any}
        >
          Falsy values content
        </Box>
      );
      const boxElement = screen.getByText("Falsy values content");

      expect(boxElement).toHaveClass(styles.bx_display);
      expect(boxElement).not.toHaveClass(styles.bx_flexDirection);
      expect(boxElement).not.toHaveClass(styles.bx_padding);
      expect(boxElement).not.toHaveClass(styles.bx_margin);
      expect(boxElement).not.toHaveClass(styles.bx_backgroundColor);
    });

    it("handles empty props without errors", () => {
      render(<Box>Empty props content</Box>);
      const boxElement = screen.getByText("Empty props content");

      expect(boxElement).toBeInTheDocument();
      expect(boxElement.className).toBe("");
    });
  });

  describe("CSS Styles (CSS Variables)", () => {
    it("applies CSS variables for basic props", () => {
      render(
        <Box display="flex" padding="20px" backgroundColor="red">
          Test content
        </Box>
      );
      const boxElement = screen.getByText("Test content");

      expect(boxElement.style.getPropertyValue("--display")).toBe("flex");
      expect(boxElement.style.getPropertyValue("--padding")).toBe("20px");
      expect(boxElement.style.getPropertyValue("--backgroundColor")).toBe(
        "red"
      );
    });

    it("applies CSS variables for responsive props", () => {
      render(
        <Box
          display="block"
          mobile={{ display: "flex", padding: "10px" }}
          tablet={{ display: "grid", padding: "15px" }}
          desktop={{ display: "flex", padding: "20px" }}
        >
          Responsive content
        </Box>
      );
      const boxElement = screen.getByText("Responsive content");

      // Base styles
      expect(boxElement.style.getPropertyValue("--display")).toBe("block");

      // Mobile styles
      expect(boxElement.style.getPropertyValue("--display-mobile")).toBe(
        "flex"
      );
      expect(boxElement.style.getPropertyValue("--padding-mobile")).toBe(
        "10px"
      );

      // Tablet styles
      expect(boxElement.style.getPropertyValue("--display-tablet")).toBe(
        "grid"
      );
      expect(boxElement.style.getPropertyValue("--padding-tablet")).toBe(
        "15px"
      );

      // Desktop styles
      expect(boxElement.style.getPropertyValue("--display-desktop")).toBe(
        "flex"
      );
      expect(boxElement.style.getPropertyValue("--padding-desktop")).toBe(
        "20px"
      );
    });

    it("handles complex responsive scenarios", () => {
      render(
        <Box
          display="block"
          padding="5px"
          mobile={{
            display: "flex",
            flexDirection: "column",
            padding: "10px",
            margin: "5px",
          }}
          tablet={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            padding: "15px",
          }}
          desktop={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          Complex responsive content
        </Box>
      );
      const boxElement = screen.getByText("Complex responsive content");

      // Base styles
      expect(boxElement.style.getPropertyValue("--display")).toBe("block");
      expect(boxElement.style.getPropertyValue("--padding")).toBe("5px");

      // Mobile styles
      expect(boxElement.style.getPropertyValue("--display-mobile")).toBe(
        "flex"
      );
      expect(boxElement.style.getPropertyValue("--flexDirection-mobile")).toBe(
        "column"
      );
      expect(boxElement.style.getPropertyValue("--padding-mobile")).toBe(
        "10px"
      );
      expect(boxElement.style.getPropertyValue("--margin-mobile")).toBe("5px");

      // Tablet styles
      expect(boxElement.style.getPropertyValue("--display-tablet")).toBe(
        "grid"
      );
      expect(
        boxElement.style.getPropertyValue("--gridTemplateColumns-tablet")
      ).toBe("1fr 1fr");
      expect(boxElement.style.getPropertyValue("--padding-tablet")).toBe(
        "15px"
      );

      // Desktop styles
      expect(boxElement.style.getPropertyValue("--display-desktop")).toBe(
        "flex"
      );
      expect(
        boxElement.style.getPropertyValue("--justifyContent-desktop")
      ).toBe("center");
      expect(boxElement.style.getPropertyValue("--alignItems-desktop")).toBe(
        "center"
      );
      expect(boxElement.style.getPropertyValue("--padding-desktop")).toBe(
        "20px"
      );
    });

    it("handles nested responsive props correctly", () => {
      render(
        <Box
          mobile={{
            display: "flex",
            padding: "10px",
          }}
          tablet={{
            display: "grid",
          }}
          desktop={{
            display: "block",
          }}
        >
          Nested responsive content
        </Box>
      );
      const boxElement = screen.getByText("Nested responsive content");

      // Mobile styles
      expect(boxElement.style.getPropertyValue("--display-mobile")).toBe(
        "flex"
      );
      expect(boxElement.style.getPropertyValue("--padding-mobile")).toBe(
        "10px"
      );

      // Tablet styles
      expect(boxElement.style.getPropertyValue("--display-tablet")).toBe(
        "grid"
      );

      // Desktop styles
      expect(boxElement.style.getPropertyValue("--display-desktop")).toBe(
        "block"
      );
    });

    it("does not apply CSS variables for falsy values", () => {
      render(
        <Box
          display="flex"
          padding={undefined}
          margin={null as any}
          backgroundColor=""
        >
          Falsy values content
        </Box>
      );
      const boxElement = screen.getByText("Falsy values content");

      expect(boxElement.style.getPropertyValue("--display")).toBe("flex");
      expect(boxElement.style.getPropertyValue("--padding")).toBe("");
      expect(boxElement.style.getPropertyValue("--margin")).toBe("");
      expect(boxElement.style.getPropertyValue("--backgroundColor")).toBe("");
    });
  });

  describe("Combined Classes and Styles", () => {
    it("applies both CSS classes and CSS variables together", () => {
      render(
        <Box
          display="flex"
          flexDirection="column"
          padding="20px"
          backgroundColor="red"
          color="white"
        >
          Combined content
        </Box>
      );
      const boxElement = screen.getByText("Combined content");

      // CSS Classes
      expect(boxElement).toHaveClass(styles.bx_display);
      expect(boxElement).toHaveClass(styles.bx_flexDirection);
      expect(boxElement).toHaveClass(styles.bx_padding);
      expect(boxElement).toHaveClass(styles.bx_backgroundColor);
      expect(boxElement).toHaveClass(styles.bx_color);

      // CSS Variables
      expect(boxElement.style.getPropertyValue("--display")).toBe("flex");
      expect(boxElement.style.getPropertyValue("--flexDirection")).toBe(
        "column"
      );
      expect(boxElement.style.getPropertyValue("--padding")).toBe("20px");
      expect(boxElement.style.getPropertyValue("--backgroundColor")).toBe(
        "red"
      );
      expect(boxElement.style.getPropertyValue("--color")).toBe("white");
    });

    it("handles responsive classes and styles together", () => {
      render(
        <Box
          display="block"
          mobile={{
            display: "flex",
            flexDirection: "column",
            padding: "10px",
          }}
          tablet={{
            display: "grid",
            justifyContent: "center",
          }}
        >
          Responsive combined content
        </Box>
      );
      const boxElement = screen.getByText("Responsive combined content");

      // Base classes and styles
      expect(boxElement).toHaveClass(styles.bx_display);
      expect(boxElement.style.getPropertyValue("--display")).toBe("block");

      // Mobile classes and styles
      expect(boxElement).toHaveClass(styles.bx_display_mobile);
      expect(boxElement).toHaveClass(styles.bx_flexDirection_mobile);
      expect(boxElement).toHaveClass(styles.bx_padding_mobile);
      expect(boxElement.style.getPropertyValue("--display-mobile")).toBe(
        "flex"
      );
      expect(boxElement.style.getPropertyValue("--flexDirection-mobile")).toBe(
        "column"
      );
      expect(boxElement.style.getPropertyValue("--padding-mobile")).toBe(
        "10px"
      );

      // Tablet classes and styles
      expect(boxElement).toHaveClass(styles.bx_display_tablet);
      expect(boxElement).toHaveClass(styles.bx_justifyContent_tablet);
      expect(boxElement.style.getPropertyValue("--display-tablet")).toBe(
        "grid"
      );
      expect(boxElement.style.getPropertyValue("--justifyContent-tablet")).toBe(
        "center"
      );
    });
  });
});
