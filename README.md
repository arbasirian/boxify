# Boxify React

A lightweight, performant React component library for building responsive layouts using CSS custom properties with full TypeScript support.

[![npm version](https://badge.fury.io/js/%40ar.basirian%2Freact.svg)](https://badge.fury.io/js/%40ar.basirian%2Freact)
[![Bundle size](https://img.shields.io/bundlephobia/min/boxify-react)](https://bundlephobia.com/result?p=boxify-react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🚀 **Lightweight**: Only ~6.3 KB gzipped
- ⚡ **High Performance**: Uses CSS custom properties for zero runtime overhead
- 📱 **Responsive**: Mobile-first responsive design system with CSS variable fallbacks
- 🎨 **CSS Custom Properties**: Modern CSS architecture with responsive breakpoints
- 🔧 **TypeScript**: Full TypeScript support with comprehensive type safety
- 🎯 **Single Component**: One powerful Box component for all layout needs
- 🏗️ **Tree Shakeable**: Optimized for modern bundlers
- 🎭 **Polymorphic**: Render as different HTML elements with `as` prop

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

The enhanced Box component supports comprehensive CSS properties with full responsive support:

### Layout & Positioning

- `display`, `position`, `top`, `right`, `bottom`, `left`, `zIndex`

### Box Model

- `width`, `height`, `minWidth`, `minHeight`, `maxWidth`, `maxHeight`

### Spacing

- `margin`, `marginTop`, `marginRight`, `marginBottom`, `marginLeft`
- `padding`, `paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`

### Typography

- `fontSize`, `fontWeight`, `textAlign`, `color`, `lineHeight`
- `letterSpacing`, `textDecoration`, `textTransform`, `fontFamily`
- `fontStyle`, `whiteSpace`, `textOverflow`

### Flexbox

- `flexDirection`, `justifyContent`, `alignItems`, `flexWrap`, `flex`

### Grid

- `gridTemplateColumns`, `gridTemplateRows`, `gridTemplateAreas`
- `gridArea`, `gridColumn`, `gridRow`, `gridColumnStart`, `gridColumnEnd`
- `gridRowStart`, `gridRowEnd`, `gridAutoFlow`, `gridAutoColumns`, `gridAutoRows`, `gap`

### Background & Border

- `backgroundColor`, `backgroundImage`
- `border`, `borderRadius`, `borderColor`, `borderStyle`, `borderWidth`

### Effects & Transforms

- `boxShadow`, `transform`, `transition`

### Overflow

- `overflow`, `overflowX`, `overflowY`

### Interactive

- `cursor`

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
  display-tablet="flex"
  display-desktop="grid"
  flexDirection-tablet="column"
  gridTemplateColumns-desktop="repeat(2, 1fr)"
  gap-tablet="10px"
  gap-desktop="20px"
  fontSize="16px"
  fontSize-tablet="18px"
  fontSize-desktop="20px"
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
3. **Zero Runtime**: All styling is handled by CSS, no JavaScript calculations
4. **Tree Shaking**: Unused CSS properties are automatically removed

### **CSS Variable Structure**

```css
/* Mobile (default) */
font-size: var(--font-size, 16px);

/* Tablet */
font-size: var(--font-size-tablet, var(--font-size, 16px));

/* Desktop */
font-size: var(
  --font-size-desktop,
  var(--font-size-tablet, var(--font-size, 16px))
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

- **Bundle Size**: ~6.3 KB (CJS) / ~6.1 KB (ESM)
- **Runtime**: Zero overhead - all styling via CSS custom properties
- **Tree Shaking**: Excellent - only imports what you use
- **Build Time**: Fast builds with Rollup and PostCSS

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
