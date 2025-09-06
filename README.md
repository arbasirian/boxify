# Boxify React

A lightweight, performant React component library for building responsive layouts using CSS custom properties with full TypeScript support.

[![npm version](https://badge.fury.io/js/boxify-react.svg)](https://badge.fury.io/js/boxify-react)
[![Bundle size](https://img.shields.io/bundlephobia/min/boxify-react)](https://bundlephobia.com/result?p=boxify-react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🚀 **Lightweight**: Only ~12.1 KB gzipped (JS + CSS)
- ⚡ **High Performance**: Uses CSS custom properties for zero runtime overhead
- 📱 **Responsive**: Mobile-first responsive design system with CSS variable fallbacks
- 🎨 **CSS Custom Properties**: Modern CSS architecture with responsive breakpoints
- 🔧 **TypeScript**: Full TypeScript support with comprehensive type safety
- 🎯 **Single Component**: One powerful Box component for all layout needs
- 🏗️ **Tree Shakeable**: Optimized for modern bundlers
- 🎭 **Polymorphic**: Render as different HTML elements with `as` prop
- 🎯 **Smart Defaults**: Comprehensive fallback values for all CSS properties

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

### CSS Import

After installation, you need to import the CSS file to ensure the styles work properly:

```tsx
// In your main entry file (e.g., App.tsx, main.tsx, or index.tsx)
import "boxify-react/dist/index.css";
```

**Note**: The CSS import is required for the Box component's responsive styles and CSS custom properties to function correctly.

## 🚀 Quick Start

```tsx
import { Box } from "boxify-react";

function App() {
  return (
    <Box
      display="flex"
      padding="20px"
      backgroundColor="#f0f0f0"
      tablet={{ padding: "40px" }}
      desktop={{ padding: "60px" }}
    >
      <Box
        as="span"
        fontSize="16px"
        color="#333"
        tablet={{ fontSize: "18px" }}
        desktop={{ fontSize: "20px" }}
      >
        Hello, Boxify!
      </Box>
    </Box>
  );
}
```

## 🧰 Utility Functions

### CX Utility for Conditional Classes

Boxify includes a lightweight `cx` utility function (similar to the [classnames](https://github.com/JedWatson/classnames) library) for conditionally joining class names together:

```tsx
import { Box, cx } from "boxify-react";

function Button({ isActive, isDisabled, variant }) {
  const buttonClasses = cx("btn", "btn-base", {
    "btn-active": isActive,
    "btn-disabled": isDisabled,
    [`btn-${variant}`]: true,
  });

  return <Box className={buttonClasses}>Button Content</Box>;
}
```

**Supported syntax:**

- **Strings**: `cx('foo', 'bar')` → `'foo bar'`
- **Objects**: `cx({ 'foo': true, 'bar': false })` → `'foo'`
- **Arrays**: `cx('foo', ['bar', 'baz'])` → `'foo bar baz'`
- **Mixed**: `cx('base', { 'active': true }, ['state', 'variant'])`
- **Falsy values**: `cx('foo', null, false, 'bar', undefined)` → `'foo bar'`

**Alias**: You can also use `classNames` instead of `cx` for better developer experience.

## 📱 Responsive Design

Boxify uses a mobile-first approach with CSS custom properties and responsive fallbacks:

```tsx
<Box
  // Base styles (mobile-first)
  padding="16px"
  fontSize="14px"
  textAlign="center"
  // Tablet overrides (768px+)
  tablet={{
    padding: "24px",
    fontSize: "16px",
    textAlign: "left",
  }}
  // Desktop overrides (1024px+)
  desktop={{
    padding: "32px",
    fontSize: "18px",
    textAlign: "right",
  }}
>
  Responsive content
</Box>
```

## 🎨 Supported CSS Properties

The enhanced Box component supports comprehensive CSS properties with full responsive support and smart defaults:

### Layout & Positioning

- `display`, `position`, `top`, `right`, `bottom`, `left`, `zIndex`
- **Defaults**: `display: block`, `position: static`, `top/right/bottom/left: auto`, `zIndex: auto`

### Box Model

- `width`, `height`, `minWidth`, `minHeight`, `maxWidth`, `maxHeight`
- **Defaults**: `width/height: auto`, `minWidth/minHeight: 0`, `maxWidth/maxHeight: none`

### Spacing

- `margin`, `marginTop`, `marginRight`, `marginBottom`, `marginLeft`
- `padding`, `paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`
- **Defaults**: All spacing properties default to `0`

### Typography

- `fontSize`, `fontWeight`, `textAlign`, `color`, `lineHeight`
- `letterSpacing`, `textDecoration`, `textTransform`, `fontFamily`
- `fontStyle`, `whiteSpace`, `textOverflow`
- **Defaults**: `fontSize: medium`, `fontWeight: normal`, `textAlign: left`, `color: inherit`, `lineHeight: normal`

### Flexbox

- `flexDirection`, `justifyContent`, `alignItems`, `flexWrap`, `flex`
- **Defaults**: `flexDirection: row`, `justifyContent: flex-start`, `alignItems: stretch`, `flexWrap: nowrap`, `flex: 0 1 auto`

### Grid

- `gridTemplateColumns`, `gridTemplateRows`, `gridTemplateAreas`
- `gridArea`, `gridColumn`, `gridRow`, `gridColumnStart`, `gridColumnEnd`
- `gridRowStart`, `gridRowEnd`, `gridAutoFlow`, `gridAutoColumns`, `gridAutoRows`, `gap`
- **Defaults**: Grid properties default to `none` or `auto` as appropriate

### Background & Border

- `backgroundColor`, `backgroundImage`
- `border`, `borderRadius`, `borderColor`, `borderStyle`, `borderWidth`
- **Defaults**: `backgroundColor: transparent`, `backgroundImage: none`, `border: none`, `borderRadius: 0`

### Effects & Transforms

- `boxShadow`, `transform`, `transition`
- **Defaults**: `boxShadow: none`, `transform: none`, `transition: all 0s ease 0s`

### Overflow

- `overflow`, `overflowX`, `overflowY`
- **Defaults**: All overflow properties default to `visible`

### Interactive

- `cursor`
- **Defaults**: `cursor: auto`

## 🔧 Component Props

### Base Props

- `children`: React nodes to render
- `className`: Additional CSS classes
- `style`: Custom inline styles
- `as`: Element type (`"div"`, `"span"`, `"label"`, `"section"`)

### Responsive Overrides

- `tablet`: Object with properties to override at tablet breakpoint (768px+)
- `desktop`: Object with properties to override at desktop breakpoint (1024px+)

## 💡 Usage Examples

### Typography & Text Styling

```tsx
<Box
  as="p"
  fontSize="18px"
  fontWeight="600"
  color="#333"
  lineHeight="1.6"
  textAlign="center"
  margin="20px 0"
>
  Styled paragraph with enhanced typography
</Box>
```

### Layout & Positioning

```tsx
<Box position="relative" padding="20px" backgroundColor="#f5f5f5">
  <Box
    position="absolute"
    top="10px"
    right="10px"
    backgroundColor="#ff6b6b"
    color="white"
    padding="5px 10px"
    borderRadius="4px"
  >
    Positioned element
  </Box>
</Box>
```

### Flexbox Layout

```tsx
<Box
  display="flex"
  justifyContent="space-between"
  alignItems="center"
  gap="20px"
  padding="20px"
  backgroundColor="white"
>
  <Box flex="1" textAlign="center">
    Item 1
  </Box>
  <Box flex="1" textAlign="center">
    Item 2
  </Box>
  <Box flex="1" textAlign="center">
    Item 3
  </Box>
</Box>
```

### Grid Layout

```tsx
<Box
  display="grid"
  gridTemplateColumns="repeat(3, 1fr)"
  gap="20px"
  padding="20px"
>
  <Box padding="20px" backgroundColor="#ff7043">
    Grid Item 1
  </Box>
  <Box padding="20px" backgroundColor="#42a5f5">
    Grid Item 2
  </Box>
  <Box padding="20px" backgroundColor="#66bb6a">
    Grid Item 3
  </Box>
</Box>
```

### Responsive Design

```tsx
<Box
  display="block"
  tablet={{ display: "flex" }}
  desktop={{ display: "grid" }}
  flexDirection="column"
  tablet={{ flexDirection: "row" }}
  gridTemplateColumns="repeat(2, 1fr)"
  gap="10px"
  tablet={{ gap: "15px" }}
  desktop={{ gap: "20px" }}
  fontSize="16px"
  tablet={{ fontSize: "18px" }}
  desktop={{ fontSize: "20px" }}
>
  Content that adapts across breakpoints
</Box>
```

### Polymorphic Rendering

```tsx
// Render as different HTML elements
<Box as="section" padding="20px" backgroundColor="#f0f0f0">
  Section content
</Box>

<Box as="span" fontSize="14px" color="#666">
  Inline text
</Box>

<Box as="label" htmlFor="input" fontWeight="bold">
  Form label
</Box>
```

## 🏗️ Architecture

The Box component uses CSS custom properties (CSS variables) for optimal performance:

### **CSS Custom Properties Approach**

1. **Props to CSS Variables**: Component props are converted to CSS custom properties
2. **Responsive Fallbacks**: CSS variables cascade from mobile → tablet → desktop
3. **Smart Defaults**: Comprehensive fallback values for all CSS properties
4. **Zero Runtime**: All styling is handled by CSS, no JavaScript calculations
5. **Tree Shaking**: Unused CSS properties are automatically removed

### **CSS Variable Structure**

```css
/* Mobile (default) */
font-size: var(--font-size, medium);

/* Tablet */
font-size: var(--font-size-tablet, var(--font-size, medium));

/* Desktop */
font-size: var(
  --font-size-desktop,
  var(--font-size-tablet, var(--font-size, medium))
);
```

### **Type Safety**

- Full TypeScript support with comprehensive type definitions
- CSS props are properly typed and validated
- Polymorphic `as` prop with proper element type constraints
- Responsive props with nested type safety

## 📱 Breakpoints

- **Mobile**: 0px - 767px (default)
- **Tablet**: 768px+
- **Desktop**: 1024px+

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 🔧 Development

```bash
# Install dependencies
npm install

# Start development mode
npm run dev

# Build for production
npm run build

# Type checking
npm run type-check

# Linting
npm run lint
```

## 📊 Performance

### Bundle Size

- **JavaScript**: ~17.5 KB (CJS/ESM) → **4.1 KB gzipped**
- **CSS**: ~21.4 KB → **3.9 KB gzipped**
- **Total**: **~8.0 KB gzipped** (JS + CSS)

### Performance Benefits

- **Zero Runtime Overhead**: All styling via CSS custom properties
- **No JavaScript Calculations**: Pure CSS-based responsive design
- **Tree Shaking**: Excellent - only imports what you use
- **Fast Builds**: Optimized with Rollup and PostCSS
- **CSS Optimization**: Minified, merged media queries, and efficient selectors

### Comparison with Alternatives

- **vs styled-components**: ~50-80% smaller bundle size
- **vs emotion**: ~60-70% smaller bundle size
- **vs CSS-in-JS libraries**: Zero runtime performance impact
- **vs utility frameworks**: More flexible, less opinionated

## 🤝 Contributing

We welcome contributions! Please ensure all changes:

- Pass TypeScript type checking
- Pass ESLint linting
- Include proper tests
- Maintain the CSS custom properties architecture

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [GitHub Repository](https://github.com/arbasirian/boxify)
- [Issue Tracker](https://github.com/arbasirian/boxify/issues)
- [API Documentation](API.md)
- [Quick Start Guide](QUICKSTART.md)
- [Changelog](CHANGELOG.md)
