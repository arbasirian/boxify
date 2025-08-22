import { Breakpoint, ResponsiveOverrides } from "../types";

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

// Merge responsive overrides with base styles
export const mergeResponsiveStyles = (
  baseStyles: React.CSSProperties,
  responsiveOverrides: ResponsiveOverrides,
  currentBreakpoint: Breakpoint = getCurrentBreakpoint()
): React.CSSProperties => {
  const styles = { ...baseStyles };

  // Apply responsive overrides based on current breakpoint
  if (currentBreakpoint === "desktop" && responsiveOverrides.desktop) {
    Object.assign(styles, responsiveOverrides.desktop);
  }
  
  if (currentBreakpoint === "tablet" && responsiveOverrides.tablet) {
    Object.assign(styles, responsiveOverrides.tablet);
  }
  
  if (currentBreakpoint === "mobile" && responsiveOverrides.mobile) {
    Object.assign(styles, responsiveOverrides.mobile);
  }

  return styles;
};

// Generate CSS custom properties for responsive overrides
export const generateResponsiveCSS = (
  responsiveOverrides: ResponsiveOverrides,
  breakpoints: Record<Breakpoint, number> = DEFAULT_BREAKPOINTS
): Record<string, string> => {
  const cssVars: Record<string, string> = {};

  Object.entries(responsiveOverrides).forEach(([breakpoint, overrides]) => {
    if (overrides) {
      Object.entries(overrides).forEach(([prop, value]) => {
        if (value !== undefined) {
          const cssVarName = `--${prop}-${breakpoint}`;
          cssVars[cssVarName] = String(value);
        }
      });
    }
  });

  return cssVars;
};

// Convert responsive overrides to CSS media queries
export const generateMediaQueries = (
  responsiveOverrides: ResponsiveOverrides,
  breakpoints: Record<Breakpoint, number> = DEFAULT_BREAKPOINTS
): string => {
  let css = "";

  Object.entries(responsiveOverrides).forEach(([breakpoint, overrides]) => {
    if (overrides && breakpoint !== "mobile") {
      const minWidth = breakpoints[breakpoint as Breakpoint];
      Object.entries(overrides).forEach(([prop, value]) => {
        if (value !== undefined) {
          css += `@media (min-width: ${minWidth}px) { .${prop}-${breakpoint} { ${prop}: ${value}; } }`;
        }
      });
    }
  });

  return css;
};
