import { Breakpoint, ResponsiveOverrides } from "../types";
import { getStaticCSSClass, getDynamicCSSClass } from "./styleCache";
import { addSSRRule, isSSR } from "./ssr";

// Default breakpoint values
export const DEFAULT_BREAKPOINTS: Record<Breakpoint, number> = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
};

// Generate responsive CSS classes for static properties
export function generateResponsiveStaticClasses(
  responsiveOverrides: ResponsiveOverrides
): string[] {
  const classes: string[] = [];
  
  if (!responsiveOverrides.mobile && !responsiveOverrides.tablet && !responsiveOverrides.desktop) {
    return classes;
  }

  // Process each breakpoint
  const breakpoints: Breakpoint[] = ["mobile", "tablet", "desktop"];
  
  for (const breakpoint of breakpoints) {
    const overrides = responsiveOverrides[breakpoint];
    if (!overrides) continue;

    for (const [prop, value] of Object.entries(overrides)) {
      if (value !== undefined) {
        const className = getStaticCSSClass(prop as any, String(value));
        classes.push(`${className}--${breakpoint}`);
      }
    }
  }

  return classes;
}

// Generate responsive CSS classes for dynamic properties
export function generateResponsiveDynamicClasses(
  responsiveOverrides: ResponsiveOverrides
): string[] {
  const classes: string[] = [];
  
  if (!responsiveOverrides.mobile && !responsiveOverrides.tablet && !responsiveOverrides.desktop) {
    return classes;
  }

  // Process each breakpoint
  const breakpoints: Breakpoint[] = ["mobile", "tablet", "desktop"];
  
  for (const breakpoint of breakpoints) {
    const overrides = responsiveOverrides[breakpoint];
    if (!overrides) continue;

    for (const [prop, value] of Object.entries(overrides)) {
      if (value !== undefined && isDynamicProperty(prop)) {
        const className = getDynamicCSSClass(prop as any);
        classes.push(`${className}--${breakpoint}`);
      }
    }
  }

  return classes;
}

// Check if a property is dynamic (uses CSS variables)
function isDynamicProperty(prop: string): boolean {
  return ['width', 'height', 'minWidth', 'minHeight', 'maxWidth', 'maxHeight'].includes(prop);
}

// Generate CSS variables for responsive dynamic values
export function generateResponsiveCSSVariables(
  responsiveOverrides: ResponsiveOverrides
): Record<string, string> {
  const cssVars: Record<string, string> = {};
  
  if (!responsiveOverrides.mobile && !responsiveOverrides.tablet && !responsiveOverrides.desktop) {
    return cssVars;
  }

  // Process each breakpoint
  const breakpoints: Breakpoint[] = ["mobile", "tablet", "desktop"];
  
  for (const breakpoint of breakpoints) {
    const overrides = responsiveOverrides[breakpoint];
    if (!overrides) continue;

    for (const [prop, value] of Object.entries(overrides)) {
      if (value !== undefined && isDynamicProperty(prop)) {
        cssVars[`--bx-${prop}-${breakpoint}`] = String(value);
      }
    }
  }

  return cssVars;
}

// Generate media query CSS for responsive classes
export function generateResponsiveMediaQueries(
  responsiveOverrides: ResponsiveOverrides
): string[] {
  const mediaQueries: string[] = [];
  
  if (!responsiveOverrides.tablet && !responsiveOverrides.desktop) {
    return mediaQueries;
  }

  // Process tablet and desktop breakpoints (skip mobile as it's base)
  const breakpoints: Breakpoint[] = ["tablet", "desktop"];
  
  for (const breakpoint of breakpoints) {
    const overrides = responsiveOverrides[breakpoint];
    if (!overrides) continue;

    const minWidth = DEFAULT_BREAKPOINTS[breakpoint];
    let css = `@media (min-width: ${minWidth}px) {`;
    
    for (const [prop, value] of Object.entries(overrides)) {
      if (value !== undefined) {
        if (isDynamicProperty(prop)) {
          // For dynamic properties, update the CSS variable
          css += ` .bx_${prop.replace(/[A-Z]/g, (char) => `_${char.toLowerCase()}`)}--${breakpoint} { --bx-${prop}: ${value}; }`;
        } else {
          // For static properties, apply the value directly
          css += ` .bx_${prop.replace(/[A-Z]/g, (char) => `_${char.toLowerCase()}`)}_${hashCSSDeclaration(prop, String(value))}--${breakpoint} { ${prop}: ${value}; }`;
        }
      }
    }
    
    css += ' }';
    mediaQueries.push(css);
  }

  return mediaQueries;
}

// Insert responsive media queries into stylesheet with SSR support
export function insertResponsiveMediaQueries(
  responsiveOverrides: ResponsiveOverrides
): void {
  const mediaQueries = generateResponsiveMediaQueries(responsiveOverrides);
  
  if (mediaQueries.length === 0) return;
  
  // Add to SSR registry if in SSR mode
  if (isSSR) {
    for (const mediaQuery of mediaQueries) {
      addSSRRule(mediaQuery);
    }
    return;
  }
  
  // Browser mode: insert into DOM
  let styleSheet = document.querySelector('style[data-boxify]') as HTMLStyleElement;
  
  if (!styleSheet) {
    styleSheet = document.createElement('style');
    styleSheet.setAttribute('data-boxify', '');
    document.head.appendChild(styleSheet);
  }
  
  // Insert media queries
  for (const mediaQuery of mediaQueries) {
    try {
      if (styleSheet.sheet) {
        styleSheet.sheet.insertRule(mediaQuery, styleSheet.sheet.cssRules.length);
      }
    } catch (error) {
      console.warn('Failed to insert media query:', mediaQuery, error);
    }
  }
}

// Simple hash function for CSS declarations
function hashCSSDeclaration(property: string, value: string): string {
  const str = `${property}:${value}`;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash).toString(36);
}
