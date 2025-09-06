import {
  getSplittedProps,
  generateBoxCssClasses,
  generateBoxStyles,
} from "./shared";
import { BoxProps, BoxCssProps } from "../types";

// Mock CSS modules styles
const mockStyles = {
  bx_display: "bx_display",
  bx_flexDirection: "bx_flexDirection",
  bx_justifyContent: "bx_justifyContent",
  bx_alignItems: "bx_alignItems",
  bx_padding: "bx_padding",
  bx_margin: "bx_margin",
  bx_backgroundColor: "bx_backgroundColor",
  bx_color: "bx_color",
  bx_display_mobile: "bx_display_mobile",
  bx_display_tablet: "bx_display_tablet",
  bx_display_desktop: "bx_display_desktop",
  bx_flexDirection_mobile: "bx_flexDirection_mobile",
  bx_flexDirection_tablet: "bx_flexDirection_tablet",
  bx_flexDirection_desktop: "bx_flexDirection_desktop",
  bx_justifyContent_tablet: "bx_justifyContent_tablet",
};

describe("getSplittedProps", () => {
  it("should split CSS props from base props correctly", () => {
    const props: BoxProps = {
      display: "flex",
      flexDirection: "column",
      padding: "20px",
      children: "Test content",
      className: "custom-class",
      hasMirror: true,
      onClick: () => {},
    };

    const result = getSplittedProps(props);

    expect(result.cssProps).toEqual({
      mobile: undefined,
      tablet: undefined,
      desktop: undefined,
      display: "flex",
      flexDirection: "column",
      padding: "20px",
    });

    expect(result.baseProps).toEqual({
      children: "Test content",
      className: "custom-class",
      hasMirror: true,
      onClick: expect.any(Function),
    });
  });

  it("should handle responsive props correctly", () => {
    const props: BoxProps = {
      display: "block",
      mobile: { display: "flex", flexDirection: "column" },
      tablet: { display: "grid", gridTemplateColumns: "1fr 1fr" },
      desktop: { display: "flex", justifyContent: "center" },
      children: "Responsive content",
    };

    const result = getSplittedProps(props);

    expect(result.cssProps).toEqual({
      display: "block",
      mobile: { display: "flex", flexDirection: "column" },
      tablet: { display: "grid", gridTemplateColumns: "1fr 1fr" },
      desktop: { display: "flex", justifyContent: "center" },
    });

    expect(result.baseProps).toEqual({
      children: "Responsive content",
      className: undefined,
      hasMirror: undefined,
    });
  });

  it("should handle empty props", () => {
    const props: BoxProps = {
      children: "Empty props",
    };

    const result = getSplittedProps(props);

    expect(result.cssProps).toEqual({
      mobile: undefined,
      tablet: undefined,
      desktop: undefined,
    });

    expect(result.baseProps).toEqual({
      children: "Empty props",
      className: undefined,
      hasMirror: undefined,
    });
  });

  it("should handle only CSS props", () => {
    const props: BoxProps = {
      display: "flex",
      padding: "10px",
      margin: "5px",
    };

    const result = getSplittedProps(props);

    expect(result.cssProps).toEqual({
      mobile: undefined,
      tablet: undefined,
      desktop: undefined,
      display: "flex",
      padding: "10px",
      margin: "5px",
    });

    expect(result.baseProps).toEqual({
      children: undefined,
      className: undefined,
      hasMirror: undefined,
    });
  });
});

describe("generateBoxCssClasses", () => {
  it("should generate CSS classes for basic props", () => {
    const props: BoxCssProps = {
      display: "flex",
      flexDirection: "column",
      padding: "20px",
    };

    const result = generateBoxCssClasses(props, mockStyles);

    expect(result).toEqual(["bx_display", "bx_flexDirection", "bx_padding"]);
  });

  it("should generate CSS classes for responsive props", () => {
    const props: BoxCssProps = {
      display: "block",
      mobile: { display: "flex", flexDirection: "column" },
      tablet: { display: "grid" },
      desktop: { display: "flex", flexDirection: "row" },
    };

    const result = generateBoxCssClasses(props, mockStyles);

    expect(result).toEqual([
      "bx_display",
      "bx_display_mobile",
      "bx_flexDirection_mobile",
      "bx_display_tablet",
      "bx_display_desktop",
      "bx_flexDirection_desktop",
    ]);
  });

  it("should handle empty props", () => {
    const props: BoxCssProps = {};

    const result = generateBoxCssClasses(props, mockStyles);

    expect(result).toEqual([]);
  });

  it("should handle props with falsy values", () => {
    const props: BoxCssProps = {
      display: "flex",
      flexDirection: undefined,
      padding: null as any,
      margin: "",
    };

    const result = generateBoxCssClasses(props, mockStyles);

    expect(result).toEqual(["bx_display"]);
  });

  it("should handle mixed responsive and non-responsive props", () => {
    const props: BoxCssProps = {
      display: "block",
      padding: "10px",
      mobile: { flexDirection: "column" },
      tablet: { justifyContent: "center" },
    };

    const result = generateBoxCssClasses(props, mockStyles);

    expect(result).toEqual([
      "bx_display",
      "bx_padding",
      "bx_flexDirection_mobile",
      "bx_justifyContent_tablet",
    ]);
  });
});

describe("generateBoxStyles", () => {
  it("should generate CSS variables for basic props", () => {
    const props: BoxCssProps = {
      display: "flex",
      padding: "20px",
      backgroundColor: "red",
    };

    const result = generateBoxStyles(props);

    expect(result).toEqual({
      "--display": "flex",
      "--padding": "20px",
      "--backgroundColor": "red",
    });
  });

  it("should generate CSS variables for responsive props", () => {
    const props: BoxCssProps = {
      display: "block",
      mobile: { display: "flex", padding: "10px" },
      tablet: { display: "grid", padding: "15px" },
      desktop: { display: "flex", padding: "20px" },
    };

    const result = generateBoxStyles(props);

    expect(result).toEqual({
      "--display": "block",
      "--display-mobile": "flex",
      "--padding-mobile": "10px",
      "--display-tablet": "grid",
      "--padding-tablet": "15px",
      "--display-desktop": "flex",
      "--padding-desktop": "20px",
    });
  });

  it("should handle empty props", () => {
    const props: BoxCssProps = {};

    const result = generateBoxStyles(props);

    expect(result).toEqual({});
  });

  it("should handle props with falsy values", () => {
    const props: BoxCssProps = {
      display: "flex",
      padding: undefined,
      margin: null as any,
      backgroundColor: "",
    };

    const result = generateBoxStyles(props);

    expect(result).toEqual({
      "--display": "flex",
    });
  });

  it("should handle complex responsive scenarios", () => {
    const props: BoxCssProps = {
      display: "block",
      padding: "5px",
      mobile: {
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        margin: "5px",
      },
      tablet: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        padding: "15px",
      },
      desktop: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      },
    };

    const result = generateBoxStyles(props);

    expect(result).toEqual({
      "--display": "block",
      "--padding": "5px",
      "--display-mobile": "flex",
      "--flexDirection-mobile": "column",
      "--padding-mobile": "10px",
      "--margin-mobile": "5px",
      "--display-tablet": "grid",
      "--gridTemplateColumns-tablet": "1fr 1fr",
      "--padding-tablet": "15px",
      "--display-desktop": "flex",
      "--justifyContent-desktop": "center",
      "--alignItems-desktop": "center",
      "--padding-desktop": "20px",
    });
  });

  it("should handle nested responsive props correctly", () => {
    const props: BoxCssProps = {
      mobile: {
        display: "flex",
        padding: "10px",
      },
      tablet: {
        display: "grid",
      },
      desktop: {
        display: "block",
      },
    };

    const result = generateBoxStyles(props);

    expect(result).toEqual({
      "--display-mobile": "flex",
      "--padding-mobile": "10px",
      "--display-tablet": "grid",
      "--display-desktop": "block",
    });
  });
});

describe("Edge cases and error handling", () => {
  it("should handle undefined styles gracefully", () => {
    const props: BoxCssProps = {
      display: "flex",
    };

    const result = generateBoxCssClasses(props, {});

    expect(result).toEqual([]);
  });

  it("should handle null and undefined props", () => {
    const props: BoxCssProps = {
      display: "flex",
      mobile: null as any,
      tablet: undefined,
    };

    const result = generateBoxCssClasses(props, mockStyles);

    expect(result).toEqual(["bx_display"]);
  });
});
