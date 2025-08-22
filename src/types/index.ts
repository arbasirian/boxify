import React from "react";

// Responsive breakpoint types
export type Breakpoint = "mobile" | "tablet" | "desktop";

// Responsive value type that can be a single value or breakpoint-specific values
export type ResponsiveValue<T> = T | Partial<Record<Breakpoint, T>>;

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
  as?: keyof JSX.IntrinsicElements;
}

// Display-specific props
export interface DisplayProps {
  display?: ResponsiveValue<DisplayValue>;
}

// CSS properties that can be applied
export interface CSSProps {
  // Layout
  position?: ResponsiveValue<React.CSSProperties["position"]>;
  top?: ResponsiveValue<React.CSSProperties["top"]>;
  right?: ResponsiveValue<React.CSSProperties["right"]>;
  bottom?: ResponsiveValue<React.CSSProperties["bottom"]>;
  left?: ResponsiveValue<React.CSSProperties["left"]>;
  zIndex?: ResponsiveValue<React.CSSProperties["zIndex"]>;

  // Box Model
  width?: ResponsiveValue<React.CSSProperties["width"]>;
  height?: ResponsiveValue<React.CSSProperties["height"]>;
  minWidth?: ResponsiveValue<React.CSSProperties["minWidth"]>;
  minHeight?: ResponsiveValue<React.CSSProperties["minHeight"]>;
  maxWidth?: ResponsiveValue<React.CSSProperties["maxWidth"]>;
  maxHeight?: ResponsiveValue<React.CSSProperties["maxHeight"]>;

  // Spacing
  margin?: ResponsiveValue<React.CSSProperties["margin"]>;
  marginTop?: ResponsiveValue<React.CSSProperties["marginTop"]>;
  marginRight?: ResponsiveValue<React.CSSProperties["marginRight"]>;
  marginBottom?: ResponsiveValue<React.CSSProperties["marginBottom"]>;
  marginLeft?: ResponsiveValue<React.CSSProperties["marginLeft"]>;

  padding?: ResponsiveValue<React.CSSProperties["padding"]>;
  paddingTop?: ResponsiveValue<React.CSSProperties["paddingTop"]>;
  paddingRight?: ResponsiveValue<React.CSSProperties["paddingRight"]>;
  paddingBottom?: ResponsiveValue<React.CSSProperties["paddingBottom"]>;
  paddingLeft?: ResponsiveValue<React.CSSProperties["paddingLeft"]>;

  // Border
  border?: ResponsiveValue<React.CSSProperties["border"]>;
  borderRadius?: ResponsiveValue<React.CSSProperties["borderRadius"]>;

  // Background
  backgroundColor?: ResponsiveValue<React.CSSProperties["backgroundColor"]>;
  backgroundImage?: ResponsiveValue<React.CSSProperties["backgroundImage"]>;

  // Typography
  color?: ResponsiveValue<React.CSSProperties["color"]>;
  fontSize?: ResponsiveValue<React.CSSProperties["fontSize"]>;
  fontWeight?: ResponsiveValue<React.CSSProperties["fontWeight"]>;
  textAlign?: ResponsiveValue<React.CSSProperties["textAlign"]>;

  // Flexbox
  flexDirection?: ResponsiveValue<React.CSSProperties["flexDirection"]>;
  justifyContent?: ResponsiveValue<React.CSSProperties["justifyContent"]>;
  alignItems?: ResponsiveValue<React.CSSProperties["alignItems"]>;
  flexWrap?: ResponsiveValue<React.CSSProperties["flexWrap"]>;
  flex?: ResponsiveValue<React.CSSProperties["flex"]>;

  // Grid
  gridTemplateColumns?: ResponsiveValue<
    React.CSSProperties["gridTemplateColumns"]
  >;
  gridTemplateRows?: ResponsiveValue<React.CSSProperties["gridTemplateRows"]>;
  gap?: ResponsiveValue<React.CSSProperties["gap"]>;

  // Transform
  transform?: ResponsiveValue<React.CSSProperties["transform"]>;
  transition?: ResponsiveValue<React.CSSProperties["transition"]>;

  // Overflow
  overflow?: ResponsiveValue<React.CSSProperties["overflow"]>;
  overflowX?: ResponsiveValue<React.CSSProperties["overflowX"]>;
  overflowY?: ResponsiveValue<React.CSSProperties["overflowY"]>;

  // Additional CSS properties
  boxShadow?: ResponsiveValue<React.CSSProperties["boxShadow"]>;
  cursor?: ResponsiveValue<React.CSSProperties["cursor"]>;
}

// Combined props for the Box component
export interface BoxProps extends BaseProps, DisplayProps, CSSProps {}

// Utility type for extracting responsive values
export type ExtractResponsiveValue<T> = T extends ResponsiveValue<infer U>
  ? U
  : never;
