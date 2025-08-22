# Boxify Architecture

## Overview

Boxify is a flexible React component library designed to accept all CSS styles as props with built-in responsive support. The library is built with a modular architecture that makes it easy to extend and maintain.

## Project Structure

```
boxify/
├── src/
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions
│   ├── components/      # React components
│   └── index.ts         # Main export file
├── dist/                # Built library files
├── examples/            # Usage examples
├── demo/                # Interactive demo
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── rollup.config.js     # Build configuration
└── README.md            # Documentation
```

## Core Architecture

### 1. Type System (`src/types/index.ts`)

The type system is the foundation of the library:

- **`Breakpoint`**: Defines responsive breakpoints (mobile, tablet, desktop)
- **`ResponsiveValue<T>`**: Generic type for responsive values
- **`BaseProps`**: Common props for all components
- **`DisplayProps`**: Display-specific props (starting point)
- **`CSSProps`**: All CSS properties with responsive support
- **`BoxProps`**: Combined interface for the main Box component

### 2. Utility Functions (`src/utils/responsive.ts`)

Handles responsive value logic:

- **`getCurrentBreakpoint()`**: Determines current breakpoint based on window width
- **`getResponsiveValue()`**: Resolves responsive values for current breakpoint
- **`generateResponsiveCSS()`**: Creates CSS custom properties
- **`generateMediaQueries()`**: Generates CSS media queries

### 3. Box Component (`src/components/Box.tsx`)

The main component that:

- Accepts all CSS properties as props
- Handles responsive values
- Generates inline styles
- Supports custom element rendering
- Optimizes re-renders with useMemo

## How to Extend the Library

### Adding New CSS Properties

1. **Update Types** (`src/types/index.ts`):

```typescript
export interface CSSProps {
  // ... existing properties

  // New properties
  boxShadow?: ResponsiveValue<React.CSSProperties["boxShadow"]>;
  textDecoration?: ResponsiveValue<React.CSSProperties["textDecoration"]>;
  cursor?: ResponsiveValue<React.CSSProperties["cursor"]>;
}
```

2. **Update Box Component** (`src/components/Box.tsx`):

```typescript
const cssProps = [
  // ... existing props
  "boxShadow",
  "textDecoration",
  "cursor",
] as const;
```

3. **Add to generateStyles function**:

```typescript
cssProps.forEach((prop) => {
  const value = props[prop];
  if (value !== undefined) {
    const resolvedValue = getResponsiveValue(value);
    if (resolvedValue !== undefined) {
      (styles as any)[prop] = resolvedValue;
    }
  }
});
```

### Adding New Responsive Breakpoints

1. **Update Breakpoint type**:

```typescript
export type Breakpoint = "mobile" | "tablet" | "desktop" | "wide";
```

2. **Update DEFAULT_BREAKPOINTS**:

```typescript
export const DEFAULT_BREAKPOINTS: Record<Breakpoint, number> = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
  wide: 1440,
};
```

3. **Update utility functions** to handle the new breakpoint.

### Adding New Components

1. **Create component file** (`src/components/NewComponent.tsx`):

```typescript
import React, { forwardRef } from "react";
import { BaseProps, CSSProps } from "../types";

export interface NewComponentProps extends BaseProps, CSSProps {
  // Component-specific props
  variant?: "primary" | "secondary";
}

export const NewComponent = forwardRef<HTMLElement, NewComponentProps>(
  (
    { children, className = "", as = "div", variant = "primary", ...props },
    ref
  ) => {
    // Component implementation
  }
);
```

2. **Export from index.ts**:

```typescript
export { NewComponent } from "./components/NewComponent";
```

## Responsive System

### How It Works

1. **Responsive Values**: Props can accept either a single value or an object with breakpoint-specific values
2. **Breakpoint Resolution**: The library finds the closest breakpoint value (current or smaller)
3. **CSS Generation**: Responsive values are converted to CSS custom properties and media queries
4. **Runtime Updates**: Components respond to window resize events

### Example Usage

```typescript
<Box
  display={{
    mobile: "block", // 0px+
    tablet: "flex", // 768px+
    desktop: "grid", // 1024px+
  }}
  width={{
    mobile: "100%", // 0px+
    tablet: "50%", // 768px+
    desktop: "33.333%", // 1024px+
  }}
>
  Responsive content
</Box>
```

## Performance Optimizations

1. **useMemo**: Styles and CSS variables are memoized to prevent unnecessary recalculations
2. **Type Safety**: Full TypeScript support prevents runtime errors
3. **Efficient Rendering**: Only updates when props actually change
4. **CSS Custom Properties**: Reduces JavaScript execution for responsive values

## Build System

### Rollup Configuration

- **Multiple Outputs**: CommonJS and ES modules
- **TypeScript Support**: Full type checking and declaration generation
- **Tree Shaking**: Enables dead code elimination
- **Source Maps**: For debugging

### Development Workflow

```bash
npm run dev      # Watch mode for development
npm run build    # Production build
npm run type-check # TypeScript checking
npm run lint     # Code linting
```

## Testing Strategy

1. **Unit Tests**: Test individual components and utilities
2. **Type Tests**: Ensure TypeScript types work correctly
3. **Integration Tests**: Test component interactions
4. **Visual Tests**: Ensure responsive behavior works correctly

## Future Enhancements

### Planned Features

1. **CSS-in-JS Integration**: Support for styled-components, emotion, etc.
2. **Theme System**: Global theme configuration
3. **Animation Props**: Built-in animation support
4. **Layout Components**: Pre-built layout components
5. **Accessibility**: Built-in accessibility features

### Extension Points

1. **Custom Breakpoints**: Allow users to define custom breakpoint systems
2. **CSS Preprocessor Support**: Support for SCSS, Less variables
3. **Design Token System**: Integration with design systems
4. **Performance Monitoring**: Built-in performance metrics

## Contributing Guidelines

1. **Type Safety**: All new features must be fully typed
2. **Performance**: New features should not impact performance
3. **Testing**: New features must include tests
4. **Documentation**: Update README and examples
5. **Backward Compatibility**: Maintain API compatibility

## Migration Guide

### From v0.1.0 to Future Versions

1. **Check Breaking Changes**: Review changelog for breaking changes
2. **Update Imports**: Update import statements if needed
3. **Test Responsiveness**: Verify responsive behavior still works
4. **Update Types**: Update TypeScript types if using custom types

This architecture provides a solid foundation for a flexible, extensible React component library that can grow with your needs while maintaining performance and type safety.
