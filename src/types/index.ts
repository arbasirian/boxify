import React from "react";

// Base props that all components will extend
export interface BaseProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: "div" | "span" | "label" | "section";
}

// CSS properties that can be applied (excluding HTML attributes to avoid conflicts)
export interface CSSProps {
  // Display
  display?: React.CSSProperties["display"];

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
  borderColor?: React.CSSProperties["borderColor"];
  borderStyle?: React.CSSProperties["borderStyle"];
  borderWidth?: React.CSSProperties["borderWidth"];

  // Background
  backgroundColor?: React.CSSProperties["backgroundColor"];
  backgroundImage?: React.CSSProperties["backgroundImage"];

  // Typography
  fontSize?: React.CSSProperties["fontSize"];
  fontWeight?: React.CSSProperties["fontWeight"];
  textAlign?: React.CSSProperties["textAlign"];
  color?: React.CSSProperties["color"];
  lineHeight?: React.CSSProperties["lineHeight"];
  letterSpacing?: React.CSSProperties["letterSpacing"];
  textDecoration?: React.CSSProperties["textDecoration"];
  textTransform?: React.CSSProperties["textTransform"];
  fontFamily?: React.CSSProperties["fontFamily"];
  fontStyle?: React.CSSProperties["fontStyle"];
  whiteSpace?: React.CSSProperties["whiteSpace"];
  textOverflow?: React.CSSProperties["textOverflow"];

  // Flexbox
  flexDirection?: React.CSSProperties["flexDirection"];
  justifyContent?: React.CSSProperties["justifyContent"];
  alignItems?: React.CSSProperties["alignItems"];
  flexWrap?: React.CSSProperties["flexWrap"];
  flex?: React.CSSProperties["flex"];

  // Grid
  gridTemplateColumns?: React.CSSProperties["gridTemplateColumns"];
  gridTemplateRows?: React.CSSProperties["gridTemplateRows"];
  gridTemplateAreas?: React.CSSProperties["gridTemplateAreas"];
  gridArea?: React.CSSProperties["gridArea"];
  gridColumn?: React.CSSProperties["gridColumn"];
  gridRow?: React.CSSProperties["gridRow"];
  gridColumnStart?: React.CSSProperties["gridColumnStart"];
  gridColumnEnd?: React.CSSProperties["gridColumnEnd"];
  gridRowStart?: React.CSSProperties["gridRowStart"];
  gridRowEnd?: React.CSSProperties["gridRowEnd"];
  gridAutoFlow?: React.CSSProperties["gridAutoFlow"];
  gridAutoColumns?: React.CSSProperties["gridAutoColumns"];
  gridAutoRows?: React.CSSProperties["gridAutoRows"];
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

// Responsive breakpoint types
export type Breakpoint = "mobile" | "tablet" | "desktop";

// Responsive overrides for specific breakpoints
export interface ResponsiveOverrides {
  mobile?: Partial<CSSProps>;
  tablet?: Partial<CSSProps>;
  desktop?: Partial<CSSProps>;
}

// Combined props for the Box component
export interface BoxProps
  extends BaseProps,
    CSSProps,
    ResponsiveOverrides,
    Omit<React.HTMLAttributes<HTMLElement>, keyof CSSProps | keyof BaseProps> {}
