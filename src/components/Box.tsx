import React, { forwardRef, useMemo, memo } from "react";
import { BoxProps } from "../types";
import {
  mergeResponsiveStyles,
  generateResponsiveCSS,
} from "../utils/responsive";

// Memoized CSS props array to prevent recreation on every render
const CSS_PROPS = [
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
  "htmlFor",
] as const;

// CSS-in-JS style generator
const generateStyles = (props: BoxProps): React.CSSProperties => {
  const styles: React.CSSProperties = {};

  // Apply base styles
  for (let i = 0; i < CSS_PROPS.length; i++) {
    const prop = CSS_PROPS[i];
    const value = props[prop];
    if (value !== undefined) {
      (styles as Record<string, unknown>)[prop] = value;
    }
  }

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

// Type for the allowed HTML elements
type AllowedElement = HTMLDivElement | HTMLSpanElement | HTMLLabelElement;

// Memoized Box component for better performance
const BoxComponent = forwardRef<AllowedElement, BoxProps>(
  (
    {
      children,
      className = "",
      as = "div",
      style,
      mobile,
      tablet,
      desktop,
      ...props
    },
    ref
  ) => {
    // Memoize styles generation
    const styles = useMemo(
      () => generateStyles({ ...props, style }),
      [props, style]
    );

    // Memoize CSS variables generation
    const cssVars = useMemo(
      () => generateCSSVars({ mobile, tablet, desktop }),
      [mobile, tablet, desktop]
    );

    // Memoize responsive classes generation
    const responsiveClasses = useMemo(() => {
      if (!mobile && !tablet && !desktop) return "";

      const classes: string[] = [];

      // Helper function to add classes for a breakpoint
      const addBreakpointClasses = (
        breakpoint: string,
        overrides: Record<string, unknown>
      ) => {
        if (overrides) {
          for (const [prop, value] of Object.entries(overrides)) {
            if (value !== undefined) {
              classes.push(`${prop}-${breakpoint}-${value}`);
            }
          }
        }
      };

      addBreakpointClasses("mobile", mobile || {});
      addBreakpointClasses("tablet", tablet || {});
      addBreakpointClasses("desktop", desktop || {});

      return classes.join(" ");
    }, [mobile, tablet, desktop]);

    // Memoize final className
    const finalClassName = useMemo(() => {
      if (!responsiveClasses) return className;
      return `${className} ${responsiveClasses}`.trim();
    }, [className, responsiveClasses]);

    // Memoize final styles
    const finalStyles = useMemo(() => {
      return { ...styles, ...cssVars };
    }, [styles, cssVars]);

    // Memoize element props to prevent unnecessary re-renders
    const elementProps = useMemo(
      () => ({
        ref,
        className: finalClassName,
        style: finalStyles,
        ...props,
        children,
      }),
      [ref, finalClassName, finalStyles, props, children]
    );

    return React.createElement(as, elementProps);
  }
);

BoxComponent.displayName = "Box";

// Export memoized version for better performance
export const Box = memo(BoxComponent);
