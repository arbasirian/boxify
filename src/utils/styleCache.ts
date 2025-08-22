import { addSSRRule, isSSR } from "./ssr";

// Style cache utility for atomic CSS generation
// This utility creates deterministic class names and caches CSS rules

// CSS property to atomic class mapping
const STATIC_PROPERTIES = [
  "display",
  "position",
  "top",
  "right",
  "bottom",
  "left",
  "zIndex",
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
] as const;

// Dynamic properties that use CSS variables
const DYNAMIC_PROPERTIES = [
  "width",
  "height",
  "minWidth",
  "minHeight",
  "maxWidth",
  "maxHeight",
] as const;

type StaticProperty = (typeof STATIC_PROPERTIES)[number];
type DynamicProperty = (typeof DYNAMIC_PROPERTIES)[number];

// Cache for generated CSS rules
const styleCache = new Map<string, string>();
const insertedRules = new Set<string>();

// Generate a deterministic hash for CSS declarations
function hashCSSDeclaration(property: string, value: string): string {
  const str = `${property}:${value}`;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash).toString(36);
}

// Generate atomic CSS class name
function generateClassName(property: string, value: string): string {
  const hash = hashCSSDeclaration(property, value);
  return `bx_${property.replace(
    /[A-Z]/g,
    (char) => `_${char.toLowerCase()}`
  )}_${hash}`;
}

// Insert CSS rule into stylesheet
function insertCSSRule(rule: string): void {
  if (insertedRules.has(rule)) return;

  // Add to SSR registry if in SSR mode
  if (isSSR) {
    addSSRRule(rule);
    insertedRules.add(rule);
    return;
  }

  // Browser mode: insert into DOM
  let styleSheet = document.querySelector(
    "style[data-boxify]"
  ) as HTMLStyleElement;

  if (!styleSheet) {
    styleSheet = document.createElement("style");
    styleSheet.setAttribute("data-boxify", "");
    document.head.appendChild(styleSheet);
  }

  if (styleSheet.sheet) {
    try {
      styleSheet.sheet.insertRule(rule, styleSheet.sheet.cssRules.length);
      insertedRules.add(rule);
    } catch (error) {
      console.warn("Failed to insert CSS rule:", rule, error);
    }
  }
}

// Generate and cache static CSS rule
export function getStaticCSSClass(
  property: StaticProperty,
  value: string
): string {
  const className = generateClassName(property, value);

  if (!styleCache.has(className)) {
    const rule = `.${className} { ${property}: ${value}; }`;
    insertCSSRule(rule);
    styleCache.set(className, rule);
  }

  return className;
}

// Generate and cache dynamic CSS rule with CSS variable
export function getDynamicCSSClass(property: DynamicProperty): string {
  const className = `bx_${property.replace(
    /[A-Z]/g,
    (char) => `_${char.toLowerCase()}`
  )}`;

  if (!styleCache.has(className)) {
    const rule = `.${className} { ${property}: var(--bx-${property}); }`;
    insertCSSRule(rule);
    styleCache.set(className, rule);
  }

  return className;
}

// Generate CSS variables for dynamic values
export function generateCSSVariables(
  props: Record<string, any>
): Record<string, string> {
  const cssVars: Record<string, string> = {};

  for (const property of DYNAMIC_PROPERTIES) {
    const value = props[property];
    if (value !== undefined) {
      cssVars[`--bx-${property}`] = String(value);
    }
  }

  return cssVars;
}

// Generate all static CSS classes for given props
export function generateStaticClasses(props: Record<string, any>): string[] {
  const classes: string[] = [];

  for (const property of STATIC_PROPERTIES) {
    const value = props[property];
    if (value !== undefined) {
      classes.push(getStaticCSSClass(property, String(value)));
    }
  }

  return classes;
}

// SSR support: get all generated rules
export function getGeneratedRules(): string[] {
  return Array.from(insertedRules);
}

// SSR support: flush rules (for server-side rendering)
export function flushRules(): string[] {
  const rules = getGeneratedRules();
  insertedRules.clear();
  return rules;
}

// Check if we're in a browser environment
export const isBrowser =
  typeof window !== "undefined" && typeof document !== "undefined";
