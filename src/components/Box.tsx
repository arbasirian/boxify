import React, { forwardRef, useMemo } from "react";
import { BoxProps, ResponsiveValue } from "../types";
import { getResponsiveValue, generateResponsiveCSS } from "../utils/responsive";

// CSS-in-JS style generator
const generateStyles = (props: BoxProps): React.CSSProperties => {
  const styles: React.CSSProperties = {};

  // Handle display prop specifically (as requested)
  if (props.display) {
    const displayValue = getResponsiveValue(props.display);
    if (displayValue) {
      styles.display = displayValue;
    }
  }

  // Handle all other CSS props
  const cssProps = [
    "position",
    "top",
    "right",
    "bottom",
    "left",
    "zIndex",
    "width",
    "height",
    "minWidth",
    "minHeight",
    "maxWidth",
    "maxHeight",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "border",
    "borderRadius",
    "backgroundColor",
    "backgroundImage",
    "color",
    "fontSize",
    "fontWeight",
    "textAlign",
    "flexDirection",
    "justifyContent",
    "alignItems",
    "flexWrap",
    "flex",
    "gridTemplateColumns",
    "gridTemplateRows",
    "gap",
    "transform",
    "transition",
    "overflow",
    "overflowX",
    "overflowY",
    "boxShadow",
    "cursor",
  ] as const;

  cssProps.forEach((prop) => {
    const value = props[prop];
    if (value !== undefined) {
      const resolvedValue = getResponsiveValue(value);
      if (resolvedValue !== undefined) {
        (styles as any)[prop] = resolvedValue;
      }
    }
  });

  // Merge with custom style prop
  if (props.style) {
    Object.assign(styles, props.style);
  }

  return styles;
};

// Generate CSS custom properties for responsive values
const generateCSSVars = (props: BoxProps): React.CSSProperties => {
  const responsiveProps: Record<string, ResponsiveValue<any>> = {};

  // Collect all responsive props
  Object.entries(props).forEach(([key, value]) => {
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      responsiveProps[key] = value;
    }
  });

  return generateResponsiveCSS(responsiveProps);
};

export const Box = forwardRef<HTMLElement, BoxProps>(
  ({ children, className = "", as = "div", ...props }, ref) => {
    const styles = useMemo(() => generateStyles(props), [props]);
    const cssVars = useMemo(() => generateCSSVars(props), [props]);

    // Merge styles with CSS custom properties
    const finalStyles = { ...styles, ...cssVars };

    // Generate responsive classes for CSS-based responsive behavior
    const responsiveClasses = useMemo(() => {
      const classes: string[] = [];

      Object.entries(props).forEach(([prop, value]) => {
        if (
          typeof value === "object" &&
          value !== null &&
          !Array.isArray(value)
        ) {
          Object.entries(value).forEach(([breakpoint, breakpointValue]) => {
            if (breakpointValue !== undefined && breakpoint !== "mobile") {
              classes.push(`${prop}-${breakpoint}-${breakpointValue}`);
            }
          });
        }
      });

      return classes.join(" ");
    }, [props]);

    const finalClassName = `${className} ${responsiveClasses}`.trim();

    return React.createElement(as, {
      ref,
      className: finalClassName,
      style: finalStyles,
      children,
    });
  }
);

Box.displayName = "Box";
