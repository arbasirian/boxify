import React from "react";

// Responsive breakpoint types
export type Breakpoint = "mobile" | "tablet" | "desktop";

// Responsive overrides for specific breakpoints
export interface ResponsiveOverrides {
  mobile?: Partial<CSSProps>;
  tablet?: Partial<CSSProps>;
  desktop?: Partial<CSSProps>;
}

// CSS Display property values
export type DisplayValue =
  | "block"
  | "inline"
  | "inline-block"
  | "flex"
  | "inline-flex"
  | "grid"
  | "inline-grid"
  | "table"
  | "table-row"
  | "table-cell"
  | "contents"
  | "list-item"
  | "none"
  | "initial"
  | "inherit";

// Base props that all components will extend
export interface BaseProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: "div" | "span" | "label";
}

// CSS properties that can be applied (excluding HTML attributes to avoid conflicts)
export interface CSSProps {
  // Display
  display?: DisplayValue;

  // Layout
  position?: React.CSSProperties["position"];
  top?: React.CSSProperties["top"];
  right?: React.CSSProperties["right"];
  bottom?: React.CSSProperties["bottom"];
  left?: React.CSSProperties["left"];
  zIndex?: React.CSSProperties["zIndex"];

  // Box Model
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  minWidth?: React.CSSProperties["minWidth"];
  minHeight?: React.CSSProperties["minHeight"];
  maxWidth?: React.CSSProperties["maxWidth"];
  maxHeight?: React.CSSProperties["maxHeight"];

  // Spacing
  margin?: React.CSSProperties["margin"];
  marginTop?: React.CSSProperties["marginTop"];
  marginRight?: React.CSSProperties["marginRight"];
  marginBottom?: React.CSSProperties["marginBottom"];
  marginLeft?: React.CSSProperties["marginLeft"];

  padding?: React.CSSProperties["padding"];
  paddingTop?: React.CSSProperties["paddingTop"];
  paddingRight?: React.CSSProperties["paddingRight"];
  paddingBottom?: React.CSSProperties["paddingBottom"];
  paddingLeft?: React.CSSProperties["paddingLeft"];

  // Border
  border?: React.CSSProperties["border"];
  borderRadius?: React.CSSProperties["borderRadius"];

  // Background
  backgroundColor?: React.CSSProperties["backgroundColor"];
  backgroundImage?: React.CSSProperties["backgroundImage"];

  // Typography
  fontSize?: React.CSSProperties["fontSize"];
  fontWeight?: React.CSSProperties["fontWeight"];
  textAlign?: React.CSSProperties["textAlign"];

  // Flexbox
  flexDirection?: React.CSSProperties["flexDirection"];
  justifyContent?: React.CSSProperties["justifyContent"];
  alignItems?: React.CSSProperties["alignItems"];
  flexWrap?: React.CSSProperties["flexWrap"];
  flex?: React.CSSProperties["flex"];

  // Grid
  gridTemplateColumns?: React.CSSProperties["gridTemplateColumns"];
  gridTemplateRows?: React.CSSProperties["gridTemplateRows"];
  gap?: React.CSSProperties["gap"];

  // Transform
  transform?: React.CSSProperties["transform"];
  transition?: React.CSSProperties["transition"];

  // Overflow
  overflow?: React.CSSProperties["overflow"];
  overflowX?: React.CSSProperties["overflowX"];
  overflowY?: React.CSSProperties["overflowY"];

  // Additional CSS properties
  boxShadow?: React.CSSProperties["boxShadow"];
  cursor?: React.CSSProperties["cursor"];
  htmlFor?: string;
}

// Combined props for the Box component
export interface BoxProps extends BaseProps, CSSProps, ResponsiveOverrides, Omit<React.HTMLAttributes<HTMLElement>, keyof CSSProps> {}
