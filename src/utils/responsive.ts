import { Breakpoint, ResponsiveValue } from "../types";

// Default breakpoint values (can be customized)
export const DEFAULT_BREAKPOINTS: Record<Breakpoint, number> = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
};

// Get current breakpoint based on window width
export const getCurrentBreakpoint = (): Breakpoint => {
  if (typeof window === "undefined") return "mobile";

  const width = window.innerWidth;

  if (width >= DEFAULT_BREAKPOINTS.desktop) return "desktop";
  if (width >= DEFAULT_BREAKPOINTS.tablet) return "tablet";
  return "mobile";
};

// Get the appropriate value for the current breakpoint
export const getResponsiveValue = <T>(
  value: ResponsiveValue<T>,
  currentBreakpoint: Breakpoint = getCurrentBreakpoint()
): T | undefined => {
  if (typeof value === "object" && value !== null && !Array.isArray(value)) {
    const responsiveValue = value as Partial<Record<Breakpoint, T>>;
    // Find the closest breakpoint value (current or smaller)
    const breakpoints: Breakpoint[] = ["mobile", "tablet", "desktop"];
    const currentIndex = breakpoints.indexOf(currentBreakpoint);

    for (let i = currentIndex; i >= 0; i--) {
      const breakpoint = breakpoints[i];
      if (responsiveValue[breakpoint] !== undefined) {
        return responsiveValue[breakpoint];
      }
    }

    return undefined;
  }

  return value;
};

// Generate CSS custom properties for responsive values
export const generateResponsiveCSS = (
  props: Record<string, ResponsiveValue<any>>,
  breakpoints: Record<Breakpoint, number> = DEFAULT_BREAKPOINTS
): Record<string, string> => {
  const cssVars: Record<string, string> = {};

  Object.entries(props).forEach(([prop, value]) => {
    if (typeof value === "object" && value !== null) {
      // Create CSS custom properties for each breakpoint
      Object.entries(value).forEach(([breakpoint, breakpointValue]) => {
        if (breakpointValue !== undefined) {
          const cssVarName = `--${prop}-${breakpoint}`;
          cssVars[cssVarName] = String(breakpointValue);
        }
      });
    }
  });

  return cssVars;
};

// Convert responsive values to CSS media queries
export const generateMediaQueries = (
  props: Record<string, ResponsiveValue<any>>,
  breakpoints: Record<Breakpoint, number> = DEFAULT_BREAKPOINTS
): string => {
  let css = "";

  Object.entries(props).forEach(([prop, value]) => {
    if (typeof value === "object" && value !== null) {
      Object.entries(value).forEach(([breakpoint, breakpointValue]) => {
        if (breakpointValue !== undefined && breakpoint !== "mobile") {
          const minWidth = breakpoints[breakpoint as Breakpoint];
          css += `@media (min-width: ${minWidth}px) { .${prop}-${breakpoint} { ${prop}: ${breakpointValue}; } }`;
        }
      });
    }
  });

  return css;
};
