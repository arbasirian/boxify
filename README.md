# Boxify React

A lightweight, performant React component library for building responsive layouts with CSS-in-JS styling.

[![npm version](https://badge.fury.io/js/%40ar.basirian%2Freact.svg)](https://badge.fury.io/js/%40ar.basirian%2Freact)
[![Bundle size](https://img.shields.io/bundlephobia/min/boxify-react)](https://bundlephobia.com/result?p=boxify-react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🚀 **Lightweight**: Only ~6.3 KB gzipped
- ⚡ **High Performance**: Optimized with React.memo and useMemo
- 📱 **Responsive**: Mobile-first responsive design system
- 🎨 **CSS-in-JS**: Apply styles directly via component props
- 🔧 **TypeScript**: Full TypeScript support with excellent type safety
- 🎯 **Flexible**: Accepts all standard HTML attributes
- 🏗️ **Tree Shakeable**: Optimized for modern bundlers

## 📦 Installation

```bash
npm install boxify-react
```

```bash
yarn add boxify-react
```

```bash
pnpm add boxify-react
```

## 🚀 Quick Start

```tsx
import { Box } from "boxify-react";

function App() {
  return (
    <Box
      display="flex"
      padding="20px"
      backgroundColor="#f0f0f0"
      desktop={{ padding: "40px" }}
    >
      <Box as="span" fontSize="16px" color="#333" tablet={{ fontSize: "18px" }}>
        Hello, Boxify!
      </Box>
    </Box>
  );
}
```

## 📱 Responsive Props

Boxify uses a mobile-first approach with breakpoint-specific overrides:

```tsx
<Box
  // Base styles (mobile-first)
  padding="16px"
  fontSize="14px"
  // Tablet overrides (768px+)
  tablet={{
    padding: "24px",
    fontSize: "16px",
  }}
  // Desktop overrides (1024px+)
  desktop={{
    padding: "32px",
    fontSize: "18px",
  }}
>
  Responsive content
</Box>
```

## 🎨 Supported CSS Properties

The Box component supports all major CSS properties:

- **Layout**: `display`, `position`, `width`, `height`
- **Spacing**: `margin`, `padding`
- **Typography**: `fontSize`, `fontWeight`, `textAlign`
- **Flexbox**: `flexDirection`, `justifyContent`, `alignItems`
- **Grid**: `gridTemplateColumns`, `gridTemplateRows`, `gap`
- **Background**: `backgroundColor`, `backgroundImage`
- **Border**: `border`, `borderRadius`
- **Effects**: `boxShadow`, `transform`, `transition`
- **And many more...**

## 🔧 Component Props

### Base Props

- `children`: React nodes to render
- `className`: Additional CSS classes
- `style`: Custom inline styles
- `as`: Element type (`"div"`, `"span"`, `"label"`)

### CSS Props

All CSS properties are supported as props with proper TypeScript types.

### Responsive Props

- `mobile`: Mobile-specific style overrides
- `tablet`: Tablet-specific style overrides (768px+)
- `desktop`: Desktop-specific style overrides (1024px+)

### HTML Attributes

All standard HTML attributes are supported and will be passed to the underlying DOM element.

## 📚 Advanced Usage

### Custom Breakpoints

```tsx
import { DEFAULT_BREAKPOINTS } from "boxify-react";

// Customize breakpoints
const customBreakpoints = {
  ...DEFAULT_BREAKPOINTS,
  tablet: 600, // Custom tablet breakpoint
  desktop: 900, // Custom desktop breakpoint
};
```

### Responsive Utilities

```tsx
import {
  getCurrentBreakpoint,
  mergeResponsiveStyles,
  generateResponsiveCSS,
} from "boxify-react";

// Get current breakpoint
const breakpoint = getCurrentBreakpoint();

// Merge responsive styles
const styles = mergeResponsiveStyles(baseStyles, responsiveOverrides);

// Generate CSS custom properties
const cssVars = generateResponsiveCSS(responsiveOverrides);
```

### Performance Optimization

```tsx
import { useMemo } from "react";

// Memoize responsive props to prevent unnecessary re-renders
const responsiveProps = useMemo(
  () => ({
    tablet: { padding: "24px" },
    desktop: { padding: "32px" },
  }),
  []
);

<Box {...responsiveProps}>Optimized content</Box>;
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 🏗️ Development

```bash
# Install dependencies
npm install

# Start development mode
npm run dev

# Build for production
npm run build

# Check bundle size
npm run size

# Lint code
npm run lint

# Type check
npm run type-check
```

## 📊 Performance

- **Bundle Size**: ~6.3 KB (CJS) / ~6.1 KB (ESM)
- **Tree Shaking**: Excellent - only imports what you use
- **Runtime**: Optimized with React.memo and useMemo
- **Build Time**: Fast builds with Rollup

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [GitHub Repository](https://github.com/arbasirian/boxify)
- [Issue Tracker](https://github.com/arbasirian/boxify/issues)
- [Performance Guide](PERFORMANCE.md)
- [Architecture Guide](ARCHITECTURE.md)
- [Changelog](CHANGELOG.md)
