// Export types
export type {
  Breakpoint,
  ResponsiveOverrides,
  BaseProps,
  CSSProps,
  BoxProps,
} from "./types";

// Export utilities
export {
  DEFAULT_BREAKPOINTS,
  getCurrentBreakpoint,
  mergeResponsiveStyles,
  generateResponsiveCSS,
  generateMediaQueries,
} from "./utils/responsive";

// Export components
export { Box } from "./components/Box";

// New atomic CSS utilities
export {
  getStaticCSSClass,
  getDynamicCSSClass,
  generateCSSVariables,
  generateStaticClasses,
  getGeneratedRules,
  flushRules,
} from "./utils/styleCache";

// SSR utilities
export {
  initSSR,
  addSSRRule,
  getSSRRules,
  flushSSRRules,
  generateSSRStylesheet,
  isSSR,
} from "./utils/ssr";

// Responsive atomic utilities
export {
  generateResponsiveStaticClasses,
  generateResponsiveDynamicClasses,
  generateResponsiveCSSVariables,
  insertResponsiveMediaQueries,
} from "./utils/responsiveAtomic";
