# Boxify

A flexible React component library that accepts all CSS styles and responsive props, starting with display properties.

## Features

- **Flexible Styling**: Accept all CSS properties as props
- **Responsive Design**: Built-in responsive breakpoint system
- **Type Safety**: Full TypeScript support with comprehensive types
- **No Custom CSS Required**: Developers can use components without defining custom styles
- **Performance Optimized**: Uses React.memo and useMemo for optimal rendering

## Installation

```bash
npm install boxify
# or
yarn add boxify
```

## Quick Start

```tsx
import { Box } from "boxify";

function App() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding="20px"
      backgroundColor="blue"
      color="white"
    >
      Hello Boxify!
    </Box>
  );
}
```

## Responsive Props

The library supports responsive values through breakpoint-specific override objects. The approach is **mobile-first**, meaning you specify base styles and then override them for larger screens:

```tsx
<Box
  display="block"
  padding="10px"
  backgroundColor="lightblue"
  tablet={{
    display: "flex",
    padding: "20px",
    justifyContent: "space-around"
  }}
  desktop={{
    display: "grid",
    padding: "30px",
    gridTemplateColumns: "repeat(3, 1fr)"
  }}
>
  Responsive content
</Box>
```

## Breakpoints

Default breakpoints (can be customized):

- `mobile`: 0px+ (base styles)
- `tablet`: 768px+ (tablet overrides)
- `desktop`: 1024px+ (desktop overrides)

## Display Props

The library starts with comprehensive display property support:

```tsx
// Basic display
<Box display="flex">Flexbox container</Box>
<Box display="grid">Grid container</Box>
<Box display="none">Hidden element</Box>

// Responsive display
<Box
  display={{
    mobile: 'block',
    tablet: 'flex',
    desktop: 'grid'
  }}
>
  Responsive layout
</Box>
```

## Supported CSS Properties

### Layout

- `position`, `top`, `right`, `bottom`, `left`, `zIndex`

### Box Model

- `width`, `height`, `minWidth`, `minHeight`, `maxWidth`, `maxHeight`

### Spacing

- `margin`, `marginTop`, `marginRight`, `marginBottom`, `marginLeft`
- `padding`, `paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`

### Border

- `border`, `borderRadius`

### Background

- `backgroundColor`, `backgroundImage`

### Typography

- `color`, `fontSize`, `fontWeight`, `textAlign`

### Flexbox

- `flexDirection`, `justifyContent`, `alignItems`, `flexWrap`, `flex`

### Grid

- `gridTemplateColumns`, `gridTemplateRows`, `gap`

### Transform

- `transform`, `transition`

### Overflow

- `overflow`, `overflowX`, `overflowY`

### Additional

- `boxShadow`, `cursor`

## Component Props

### Base Props

- `children`: React children
- `className`: Additional CSS classes
- `style`: Custom inline styles
- `as`: HTML element to render (default: 'div')

### Display Props

- `display`: CSS display property with responsive support

### CSS Props

All standard CSS properties with responsive support

## Advanced Usage

### Custom Element Rendering

```tsx
<Box as="section" display="flex">
  Section with flexbox
</Box>

<Box as="button" display="inline-block">
  Button element
</Box>
```

### Combining with Custom Styles

```tsx
<Box
  display="flex"
  style={{
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
  }}
>
  Custom styled flexbox
</Box>
```

### Responsive Layouts

```tsx
<Box
  display="block"
  padding="10px"
  gap="10px"
  backgroundColor="lightgray"
  tablet={{
    display: "flex",
    padding: "20px",
    gap: "20px",
    gridTemplateColumns: "repeat(3, 1fr)",
  }}
  desktop={{
    display: "grid",
    padding: "30px",
    gap: "30px",
    gridTemplateColumns: "repeat(4, 1fr)",
  }}
>
  <Box>Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
  <Box>Item 4</Box>
</Box>
```

## Development

```bash
# Install dependencies
npm install

# Development mode
npm run dev

# Build
npm run build

# Type checking
npm run type-check

# Linting
npm run lint
```

## Architecture

The library is built with a modular architecture:

- **Types**: Comprehensive TypeScript definitions
- **Utilities**: Responsive value handling and CSS generation
- **Components**: React components with flexible prop systems
- **Build System**: Rollup-based bundling with multiple output formats

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT
