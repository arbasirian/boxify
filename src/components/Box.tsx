import React, { forwardRef, useMemo } from "react";
import { BoxProps } from "../types";
import { mergeResponsiveStyles, generateResponsiveCSS } from "../utils/responsive";

// CSS-in-JS style generator
const generateStyles = (props: BoxProps): React.CSSProperties => {
  const styles: React.CSSProperties = {};

  // Handle all CSS props (base styles)
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

  // Apply base styles
  cssProps.forEach((prop) => {
    const value = props[prop];
    if (value !== undefined) {
      (styles as any)[prop] = value;
    }
  });

  // Apply responsive overrides
  const responsiveOverrides = {
    mobile: props.mobile,
    tablet: props.tablet,
    desktop: props.desktop,
  };

  const finalStyles = mergeResponsiveStyles(styles, responsiveOverrides);

  // Merge with custom style prop
  if (props.style) {
    Object.assign(finalStyles, props.style);
  }

  return finalStyles;
};

// Generate CSS custom properties for responsive overrides
const generateCSSVars = (props: BoxProps): React.CSSProperties => {
  const responsiveOverrides = {
    mobile: props.mobile,
    tablet: props.tablet,
    desktop: props.desktop,
  };

  return generateResponsiveCSS(responsiveOverrides);
};

export const Box = forwardRef<HTMLElement, BoxProps>(
  ({ children, className = "", as = "div", mobile, tablet, desktop, ...props }, ref) => {
    const styles = useMemo(() => generateStyles(props), [props, mobile, tablet, desktop]);
    const cssVars = useMemo(() => generateCSSVars(props), [props, mobile, tablet, desktop]);

    // Merge styles with CSS custom properties
    const finalStyles = { ...styles, ...cssVars };

    // Generate responsive classes for CSS-based responsive behavior
    const responsiveClasses = useMemo(() => {
      const classes: string[] = [];

      // Add classes for responsive overrides
      if (mobile) {
        Object.entries(mobile).forEach(([prop, value]) => {
          if (value !== undefined) {
            classes.push(`${prop}-mobile-${value}`);
          }
        });
      }

      if (tablet) {
        Object.entries(tablet).forEach(([prop, value]) => {
          if (value !== undefined) {
            classes.push(`${prop}-tablet-${value}`);
          }
        });
      }

      if (desktop) {
        Object.entries(desktop).forEach(([prop, value]) => {
          if (value !== undefined) {
            classes.push(`${prop}-desktop-${value}`);
          }
        });
      }

      return classes.join(" ");
    }, [mobile, tablet, desktop]);

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
