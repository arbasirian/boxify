# Boxify Atomic CSS System

## Overview

The Boxify library has been refactored to use an atomic CSS + CSS variables system instead of inline styles. This provides significant performance improvements while maintaining the same public API.

## How It Works

### 1. Static Properties → Atomic CSS Classes

Static CSS properties (like `display`, `padding`, `backgroundColor`, etc.) are converted to atomic CSS classes that are inserted into a shared stylesheet only once per unique declaration.

```tsx
<Box display="flex" padding="20px" backgroundColor="lightblue">
  Content
</Box>
```

**Generated HTML:**
```html
<div class="bx_display_flex bx_padding_20px bx_background_color_lightblue">
  Content
</div>
```

**Generated CSS:**
```css
.bx_display_flex { display: flex; }
.bx_padding_20px { padding: 20px; }
.bx_background_color_lightblue { background-color: lightblue; }
```

### 2. Dynamic Properties → CSS Variables

Dynamic properties (like `width`, `height`, `minWidth`, etc.) use CSS variables with stable class names, so only the variable value changes per element.

```tsx
<Box width="300px" height="100px">
  Content
</Box>
```

**Generated HTML:**
```html
<div class="bx_width bx_height" style="--bx-width: 300px; --bx-height: 100px;">
  Content
</div>
```

**Generated CSS:**
```css
.bx_width { width: var(--bx-width); }
.bx_height { height: var(--bx-height); }
```

### 3. Responsive Properties → Breakpoint Classes

Responsive properties generate breakpoint-specific classes and CSS variables.

```tsx
<Box
  display="block"
  width="100%"
  mobile={{ display: "block", width: "100%" }}
  tablet={{ display: "flex", width: "50%" }}
  desktop={{ display: "grid", width: "33.33%" }}
>
  Content
</Box>
```

**Generated HTML:**
```html
<div 
  class="bx_display_block bx_width bx_display_block--mobile bx_width--mobile bx_display_flex--tablet bx_width--tablet bx_display_grid--desktop bx_width--desktop"
  style="--bx-width: 100%; --bx-width-mobile: 100%; --bx-width-tablet: 50%; --bx-width-desktop: 33.33%;"
>
  Content
</div>
```

**Generated CSS:**
```css
.bx_display_block { display: block; }
.bx_width { width: var(--bx-width); }

@media (min-width: 768px) {
  .bx_display_flex--tablet { display: flex; }
  .bx_width--tablet { --bx-width: 50%; }
}

@media (min-width: 1024px) {
  .bx_display_grid--desktop { display: grid; }
  .bx_width--desktop { --bx-width: 33.33%; }
}
```

## Benefits

### Performance Improvements
- **No inline styles**: CSS classes are generated once and reused
- **Better caching**: Same props always generate same class names
- **Smaller bundle**: CSS rules are shared across components
- **CSS features**: Now supports `:hover`, media queries, and more

### Developer Experience
- **Same API**: No breaking changes to existing code
- **TypeScript support**: Full type safety maintained
- **SSR ready**: Server-side rendering support
- **Debugging**: Easy to inspect generated CSS classes

### CSS Features Now Available
- **Pseudo-classes**: `:hover`, `:focus`, `:active`
- **Media queries**: Responsive breakpoints
- **CSS animations**: Transitions and keyframes
- **CSS custom properties**: Dynamic values via variables

## API Reference

### Box Component
The Box component maintains the exact same API as before:

```tsx
<Box
  // Static properties (generate atomic CSS classes)
  display="flex"
  padding="20px"
  backgroundColor="lightblue"
  
  // Dynamic properties (use CSS variables)
  width="300px"
  height="100px"
  
  // Responsive properties
  mobile={{ display: "block", padding: "15px" }}
  tablet={{ display: "flex", padding: "25px" }}
  desktop={{ display: "grid", padding: "30px" }}
  
  // Custom styles (merged with CSS variables)
  style={{ border: "1px solid #ccc" }}
  
  // Element type
  as="section"
>
  Content
</Box>
```

### Utility Functions

#### Style Cache
```tsx
import { 
  getStaticCSSClass, 
  getDynamicCSSClass,
  generateCSSVariables,
  generateStaticClasses 
} from 'boxify-react';

// Generate a static CSS class
const className = getStaticCSSClass('display', 'flex');

// Generate a dynamic CSS class
const className = getDynamicCSSClass('width');

// Generate CSS variables for dynamic properties
const cssVars = generateCSSVariables({ width: '300px', height: '100px' });

// Generate all static classes for props
const classes = generateStaticClasses({ display: 'flex', padding: '20px' });
```

#### SSR Support
```tsx
import { 
  initSSR, 
  getSSRRules, 
  generateSSRStylesheet 
} from 'boxify-react';

// Initialize SSR mode (call on server)
initSSR();

// Get collected CSS rules
const rules = getSSRRules();

// Generate stylesheet HTML
const stylesheet = generateSSRStylesheet();
```

#### Responsive Utilities
```tsx
import { 
  generateResponsiveStaticClasses,
  generateResponsiveDynamicClasses,
  insertResponsiveMediaQueries
} from 'boxify-react';

// Generate responsive static classes
const classes = generateResponsiveStaticClasses({ 
  mobile: { display: 'block' }, 
  tablet: { display: 'flex' } 
});

// Generate responsive dynamic classes
const classes = generateResponsiveDynamicClasses({ 
  mobile: { width: '100%' }, 
  tablet: { width: '50%' } 
});

// Insert responsive media queries
insertResponsiveMediaQueries({ 
  mobile: { display: 'block' }, 
  tablet: { display: 'flex' } 
});
```

## Migration Guide

### No Breaking Changes
The refactored Box component maintains 100% API compatibility. Your existing code will continue to work without any modifications.

### Before (Inline Styles)
```tsx
<Box display="flex" padding="20px" backgroundColor="lightblue">
  Content
</Box>
```

**Generated HTML:**
```html
<div style="display: flex; padding: 20px; background-color: lightblue;">
  Content
</div>
```

### After (Atomic CSS)
```tsx
<Box display="flex" padding="20px" backgroundColor="lightblue">
  Content
</Box>
```

**Generated HTML:**
```html
<div class="bx_display_flex bx_padding_20px bx_background_color_lightblue">
  Content
</div>
```

## Implementation Details

### Style Cache
- Uses a deterministic hash function to generate class names
- Caches CSS rules in a shared stylesheet
- Prevents duplicate rule insertion
- Supports both browser and SSR environments

### CSS Class Naming
- Format: `bx_{property}_{hash}` for static properties
- Format: `bx_{property}` for dynamic properties
- Format: `bx_{property}_{hash}--{breakpoint}` for responsive static properties
- Format: `bx_{property}--{breakpoint}` for responsive dynamic properties

### Stylesheet Management
- Creates a single `<style data-boxify>` tag
- Automatically manages CSS rule insertion
- Handles media queries for responsive properties
- Supports SSR with rule collection and flushing

### Performance Optimizations
- Memoized class generation to prevent unnecessary recalculations
- Shared stylesheet to minimize DOM manipulation
- Deterministic class names for maximum reuse
- Efficient CSS rule insertion and caching

## Browser Support

The atomic CSS system works in all modern browsers that support:
- CSS Custom Properties (CSS Variables)
- CSS Grid and Flexbox
- Media Queries
- CSS-in-JS style insertion

## SSR Support

The system fully supports server-side rendering:

1. **Server**: CSS rules are collected in a registry
2. **Client**: Rules are flushed to the DOM and normal operation resumes
3. **Hydration**: Seamless transition from SSR to client-side rendering

```tsx
// Server-side
import { initSSR, generateSSRStylesheet } from 'boxify-react';

initSSR();
// ... render components ...
const stylesheet = generateSSRStylesheet();

// Client-side
// Rules are automatically flushed to DOM on first render
```

## Examples

See the `demo/atomic-demo.html` file for a comprehensive demonstration of the atomic CSS system in action.
