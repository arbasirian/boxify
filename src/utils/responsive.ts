import { Breakpoint, ResponsiveOverrides } from "../types";

// Default breakpoint values (can be customized)
export const DEFAULT_BREAKPOINTS: Record<Breakpoint, number> = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
};

// Memoized breakpoints array to prevent recreation
const BREAKPOINTS: Breakpoint[] = ["mobile", "tablet", "desktop"];

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
  // Early return if no responsive overrides
  if (
    !responsiveOverrides.mobile &&
    !responsiveOverrides.tablet &&
    !responsiveOverrides.desktop
  ) {
    return baseStyles;
  }

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
  // Early return if no responsive overrides
  if (
    !responsiveOverrides.mobile &&
    !responsiveOverrides.tablet &&
    !responsiveOverrides.desktop
  ) {
    return {};
  }

  const cssVars: Record<string, string> = {};

  // Process each breakpoint
  for (let i = 0; i < BREAKPOINTS.length; i++) {
    const breakpoint = BREAKPOINTS[i];
    const overrides = responsiveOverrides[breakpoint];

    if (overrides) {
      const entries = Object.entries(overrides);
      for (let j = 0; j < entries.length; j++) {
        const [prop, value] = entries[j];
        if (value !== undefined) {
          cssVars[`--${prop}-${breakpoint}`] = String(value);
        }
      }
    }
  }

  return cssVars;
};

// Convert responsive overrides to CSS media queries
export const generateMediaQueries = (
  responsiveOverrides: ResponsiveOverrides,
  breakpoints: Record<Breakpoint, number> = DEFAULT_BREAKPOINTS
): string => {
  // Early return if no responsive overrides
  if (!responsiveOverrides.tablet && !responsiveOverrides.desktop) {
    return "";
  }

  let css = "";

  // Process tablet and desktop breakpoints (skip mobile as it's base)
  for (let i = 1; i < BREAKPOINTS.length; i++) {
    const breakpoint = BREAKPOINTS[i];
    const overrides = responsiveOverrides[breakpoint];

    if (overrides) {
      const minWidth = breakpoints[breakpoint];
      const entries = Object.entries(overrides);

      for (let j = 0; j < entries.length; j++) {
        const [prop, value] = entries[j];
        if (value !== undefined) {
          css += `@media (min-width: ${minWidth}px) { .${prop}-${breakpoint} { ${prop}: ${value}; } }`;
        }
      }
    }
  }

  return css;
};
