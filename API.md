# Boxify React - API Documentation

## Overview

The Box component is a powerful, polymorphic React component that provides comprehensive CSS property support with responsive design capabilities. It uses CSS custom properties for optimal performance and zero runtime overhead.

## Box Component

### Import

```tsx
import { Box } from "boxify-react";
```

### Basic Usage

```tsx
<Box display="flex" padding="20px" backgroundColor="#f0f0f0">
  Content goes here
</Box>
```

## Props

### Base Props

| Prop        | Type                                      | Default | Description                 |
| ----------- | ----------------------------------------- | ------- | --------------------------- |
| `children`  | `React.ReactNode`                         | -       | React nodes to render       |
| `className` | `string`                                  | -       | Additional CSS classes      |
| `style`     | `React.CSSProperties`                     | -       | Custom inline styles        |
| `as`        | `"div" \| "span" \| "label" \| "section"` | `"div"` | HTML element type to render |

### Responsive Props

| Prop      | Type                | Description                                    |
| --------- | ------------------- | ---------------------------------------------- |
| `tablet`  | `Partial<CSSProps>` | Styles applied at tablet breakpoint (768px+)   |
| `desktop` | `Partial<CSSProps>` | Styles applied at desktop breakpoint (1024px+) |

## CSS Properties

### Layout & Positioning

| Prop       | Type                        | CSS Property | Responsive |
| ---------- | --------------------------- | ------------ | ---------- |
| `display`  | `CSSProperties["display"]`  | `display`    | ✅         |
| `position` | `CSSProperties["position"]` | `position`   | ✅         |
| `top`      | `CSSProperties["top"]`      | `top`        | ✅         |
| `right`    | `CSSProperties["right"]`    | `right`      | ✅         |
| `bottom`   | `CSSProperties["bottom"]`   | `bottom`     | ✅         |
| `left`     | `CSSProperties["left"]`     | `left`       | ✅         |
| `zIndex`   | `CSSProperties["zIndex"]`   | `z-index`    | ✅         |

### Box Model

| Prop        | Type                         | CSS Property | Responsive |
| ----------- | ---------------------------- | ------------ | ---------- |
| `width`     | `CSSProperties["width"]`     | `width`      | ✅         |
| `height`    | `CSSProperties["height"]`    | `height`     | ✅         |
| `minWidth`  | `CSSProperties["minWidth"]`  | `min-width`  | ✅         |
| `minHeight` | `CSSProperties["minHeight"]` | `min-height` | ✅         |
| `maxWidth`  | `CSSProperties["maxWidth"]`  | `max-width`  | ✅         |
| `maxHeight` | `CSSProperties["maxHeight"]` | `max-height` | ✅         |

### Spacing

| Prop            | Type                             | CSS Property     | Responsive |
| --------------- | -------------------------------- | ---------------- | ---------- |
| `margin`        | `CSSProperties["margin"]`        | `margin`         | ✅         |
| `marginTop`     | `CSSProperties["marginTop"]`     | `margin-top`     | ✅         |
| `marginRight`   | `CSSProperties["marginRight"]`   | `margin-right`   | ✅         |
| `marginBottom`  | `CSSProperties["marginBottom"]`  | `margin-bottom`  | ✅         |
| `marginLeft`    | `CSSProperties["marginLeft"]`    | `margin-left`    | ✅         |
| `padding`       | `CSSProperties["padding"]`       | `padding`        | ✅         |
| `paddingTop`    | `CSSProperties["paddingTop"]`    | `padding-top`    | ✅         |
| `paddingRight`  | `CSSProperties["paddingRight"]`  | `padding-right`  | ✅         |
| `paddingBottom` | `CSSProperties["paddingBottom"]` | `padding-bottom` | ✅         |
| `paddingLeft`   | `CSSProperties["paddingLeft"]`   | `padding-left`   | ✅         |

### Border

| Prop           | Type                            | CSS Property    | Responsive |
| -------------- | ------------------------------- | --------------- | ---------- |
| `border`       | `CSSProperties["border"]`       | `border`        | ✅         |
| `borderRadius` | `CSSProperties["borderRadius"]` | `border-radius` | ✅         |
| `borderColor`  | `CSSProperties["borderColor"]`  | `border-color`  | ✅         |
| `borderStyle`  | `CSSProperties["borderStyle"]`  | `border-style`  | ✅         |
| `borderWidth`  | `CSSProperties["borderWidth"]`  | `border-width`  | ✅         |

### Background

| Prop              | Type                               | CSS Property       | Responsive |
| ----------------- | ---------------------------------- | ------------------ | ---------- |
| `backgroundColor` | `CSSProperties["backgroundColor"]` | `background-color` | ✅         |
| `backgroundImage` | `CSSProperties["backgroundImage"]` | `background-image` | ✅         |

### Typography

| Prop             | Type                              | CSS Property      | Responsive |
| ---------------- | --------------------------------- | ----------------- | ---------- |
| `fontSize`       | `CSSProperties["fontSize"]`       | `font-size`       | ✅         |
| `fontWeight`     | `CSSProperties["fontWeight"]`     | `font-weight`     | ✅         |
| `textAlign`      | `CSSProperties["textAlign"]`      | `text-align`      | ✅         |
| `color`          | `CSSProperties["color"]`          | `color`           | ✅         |
| `lineHeight`     | `CSSProperties["lineHeight"]`     | `line-height`     | ✅         |
| `letterSpacing`  | `CSSProperties["letterSpacing"]`  | `letter-spacing`  | ✅         |
| `textDecoration` | `CSSProperties["textDecoration"]` | `text-decoration` | ✅         |
| `textTransform`  | `CSSProperties["textTransform"]`  | `text-transform`  | ✅         |
| `fontFamily`     | `CSSProperties["fontFamily"]`     | `font-family`     | ✅         |
| `fontStyle`      | `CSSProperties["fontStyle"]`      | `font-style`      | ✅         |
| `whiteSpace`     | `CSSProperties["whiteSpace"]`     | `white-space`     | ✅         |
| `textOverflow`   | `CSSProperties["textOverflow"]`   | `text-overflow`   | ✅         |

### Flexbox

| Prop             | Type                              | CSS Property      | Responsive |
| ---------------- | --------------------------------- | ----------------- | ---------- |
| `flexDirection`  | `CSSProperties["flexDirection"]`  | `flex-direction`  | ✅         |
| `justifyContent` | `CSSProperties["justifyContent"]` | `justify-content` | ✅         |
| `alignItems`     | `CSSProperties["alignItems"]`     | `align-items`     | ✅         |
| `flexWrap`       | `CSSProperties["flexWrap"]`       | `flex-wrap`       | ✅         |
| `flex`           | `CSSProperties["flex"]`           | `flex`            | ✅         |

### Grid

| Prop                  | Type                                   | CSS Property            | Responsive |
| --------------------- | -------------------------------------- | ----------------------- | ---------- |
| `gridTemplateColumns` | `CSSProperties["gridTemplateColumns"]` | `grid-template-columns` | ✅         |
| `gridTemplateRows`    | `CSSProperties["gridTemplateRows"]`    | `grid-template-rows`    | ✅         |
| `gridTemplateAreas`   | `CSSProperties["gridTemplateAreas"]`   | `grid-template-areas`   | ✅         |
| `gridArea`            | `CSSProperties["gridArea"]`            | `grid-area`             | ✅         |
| `gridColumn`          | `CSSProperties["gridColumn"]`          | `grid-column`           | ✅         |
| `gridRow`             | `CSSProperties["gridRow"]`             | `grid-row`              | ✅         |
| `gridColumnStart`     | `CSSProperties["gridColumnStart"]`     | `grid-column-start`     | ✅         |
| `gridColumnEnd`       | `CSSProperties["gridColumnEnd"]`       | `grid-column-end`       | ✅         |
| `gridRowStart`        | `CSSProperties["gridRowStart"]`        | `grid-row-start`        | ✅         |
| `gridRowEnd`          | `CSSProperties["gridRowEnd"]`          | `grid-row-end`          | ✅         |
| `gridAutoFlow`        | `CSSProperties["gridAutoFlow"]`        | `grid-auto-flow`        | ✅         |
| `gridAutoColumns`     | `CSSProperties["gridAutoColumns"]`     | `grid-auto-columns`     | ✅         |
| `gridAutoRows`        | `CSSProperties["gridAutoRows"]`        | `grid-auto-rows`        | ✅         |
| `gap`                 | `CSSProperties["gap"]`                 | `gap`                   | ✅         |

### Effects & Transforms

| Prop         | Type                          | CSS Property | Responsive |
| ------------ | ----------------------------- | ------------ | ---------- |
| `boxShadow`  | `CSSProperties["boxShadow"]`  | `box-shadow` | ✅         |
| `transform`  | `CSSProperties["transform"]`  | `transform`  | ✅         |
| `transition` | `CSSProperties["transition"]` | `transition` | ✅         |

### Overflow

| Prop        | Type                         | CSS Property | Responsive |
| ----------- | ---------------------------- | ------------ | ---------- |
| `overflow`  | `CSSProperties["overflow"]`  | `overflow`   | ✅         |
| `overflowX` | `CSSProperties["overflowX"]` | `overflow-x` | ✅         |
| `overflowY` | `CSSProperties["overflowY"]` | `overflow-y` | ✅         |

### Interactive

| Prop     | Type                      | CSS Property | Responsive |
| -------- | ------------------------- | ------------ | ---------- |
| `cursor` | `CSSProperties["cursor"]` | `cursor`     | ✅         |

### Special Props

| Prop      | Type     | CSS Property | Description            |
| --------- | -------- | ------------ | ---------------------- |
| `htmlFor` | `string` | `for`        | Used when `as="label"` |

## Responsive Design

### Breakpoints

- **Mobile**: 0px - 767px (default)
- **Tablet**: 768px+
- **Desktop**: 1024px+

### Responsive Syntax

```tsx
<Box
  // Base styles (mobile-first)
  fontSize="16px"
  padding="20px"
  // Tablet overrides
  tablet={{
    fontSize: "18px",
    padding: "30px",
  }}
  // Desktop overrides
  desktop={{
    fontSize: "20px",
    padding: "40px",
  }}
>
  Responsive content
</Box>
```

### CSS Variable Fallbacks

The component automatically generates CSS custom properties with responsive fallbacks:

```css
/* Generated CSS */
.box {
  font-size: var(--font-size, 16px);
  padding: var(--padding, 20px);
}

@media (min-width: 768px) {
  .box {
    font-size: var(--font-size-tablet, var(--font-size, 16px));
    padding: var(--padding-tablet, var(--padding, 20px));
  }
}

@media (min-width: 1024px) {
  .box {
    font-size: var(
      --font-size-desktop,
      var(--font-size-tablet, var(--font-size, 16px))
    );
    padding: var(
      --padding-desktop,
      var(--padding-tablet, var(--padding, 20px))
    );
  }
}
```

## Polymorphic Rendering

### Element Types

The `as` prop allows you to render the Box component as different HTML elements:

```tsx
// Default div
<Box padding="20px">Content</Box>

// As span
<Box as="span" fontSize="14px">Inline text</Box>

// As label
<Box as="label" htmlFor="input" fontWeight="bold">Form label</Box>

// As section
<Box as="section" backgroundColor="#f0f0f0">Section content</Box>
```

### Type Safety

The `as` prop is properly typed to only allow valid HTML elements:

```tsx
type ValidElements = "div" | "span" | "label" | "section";

interface BaseProps {
  as?: ValidElements;
  // ... other props
}
```

## Examples

### Basic Layout

```tsx
<Box
  display="flex"
  flexDirection="column"
  gap="20px"
  padding="20px"
  backgroundColor="#f5f5f5"
>
  <Box
    flex="1"
    padding="20px"
    backgroundColor="white"
    borderRadius="8px"
    boxShadow="0 2px 4px rgba(0,0,0,0.1)"
  >
    Card 1
  </Box>

  <Box
    flex="1"
    padding="20px"
    backgroundColor="white"
    borderRadius="8px"
    boxShadow="0 2px 4px rgba(0,0,0,0.1)"
  >
    Card 2
  </Box>
</Box>
```

### Responsive Grid

```tsx
<Box
  display="grid"
  gridTemplateColumns="1fr"
  gap="20px"
  padding="20px"
  tablet={{
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "30px",
  }}
  desktop={{
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "40px",
  }}
>
  <Box padding="20px" backgroundColor="#ff7043">
    Item 1
  </Box>
  <Box padding="20px" backgroundColor="#42a5f5">
    Item 2
  </Box>
  <Box padding="20px" backgroundColor="#66bb6a">
    Item 3
  </Box>
</Box>
```

### Form Elements

```tsx
<Box
  as="label"
  htmlFor="email"
  display="block"
  margin="10px 0 5px 0"
  fontWeight="bold"
  color="#333"
>
  Email Address
</Box>

<Box
  as="span"
  id="email-help"
  color="#666"
  fontSize="12px"
  margin="0 0 20px 0"
>
  We'll never share your email with anyone else.
</Box>
```

## TypeScript Support

### Full Type Safety

All props are fully typed with TypeScript:

```tsx
import { Box, BoxProps } from "boxify-react";

// Props are fully typed
const MyComponent: React.FC = () => {
  return (
    <Box
      display="flex" // ✅ TypeScript knows this is valid
      fontSize="16px" // ✅ TypeScript knows this is valid
      invalidProp="value" // ❌ TypeScript error
    >
      Content
    </Box>
  );
};
```

### Responsive Props Typing

Responsive props maintain full type safety:

```tsx
<Box
  fontSize="16px"
  tablet={{
    fontSize: "18px", // ✅ TypeScript knows this is valid
    invalidProp: "value", // ❌ TypeScript error
  }}
  desktop={{
    fontSize: "20px", // ✅ TypeScript knows this is valid
  }}
>
  Typed content
</Box>
```

## Performance

### Zero Runtime Overhead

- All styling is handled by CSS custom properties
- No JavaScript calculations at runtime
- No style object creation or manipulation
- Pure CSS-based responsive design

### Bundle Size

- **CJS**: ~6.3 KB
- **ESM**: ~6.1 KB
- **Tree Shaking**: Excellent support
- **CSS**: Minimal and optimized

### Build Optimization

- Rollup with PostCSS for CSS processing
- CSS modules for scoped styling
- Automatic vendor prefixing
- CSS minification and optimization

## Best Practices

### 1. Mobile-First Approach

Always start with mobile styles and override for larger screens:

```tsx
// ✅ Good - Mobile-first
<Box
  fontSize="14px"
  padding="10px"
  tablet={{ fontSize: "16px", padding: "20px" }}
  desktop={{ fontSize: "18px", padding: "30px" }}
>

// ❌ Avoid - Desktop-first
<Box
  fontSize="18px"
  padding="30px"
  tablet={{ fontSize: "16px", padding: "20px" }}
  mobile={{ fontSize: "14px", padding: "10px" }}
>
```

### 2. Use Semantic Element Types

Choose appropriate HTML elements for your content:

```tsx
// ✅ Good - Semantic
<Box as="section" padding="20px">
  <Box as="h2" fontSize="24px" fontWeight="bold">Section Title</Box>
  <Box as="p" fontSize="16px" lineHeight="1.6">Section content...</Box>
</Box>

// ❌ Avoid - Generic
<Box as="div" padding="20px">
  <Box as="div" fontSize="24px" fontWeight="bold">Section Title</Box>
  <Box as="div" fontSize="16px" lineHeight="1.6">Section content...</Box>
</Box>
```

### 3. Leverage CSS Custom Properties

The component automatically handles CSS variables, so you can focus on your design:

```tsx
// ✅ Good - Let the component handle CSS variables
<Box
  fontSize="16px"
  tablet={{ fontSize: "18px" }}
  desktop={{ fontSize: "20px" }}
>

// ❌ Avoid - Manual CSS variable handling
<Box
  style={{
    "--font-size": "16px",
    "--font-size-tablet": "18px",
    "--font-size-desktop": "20px",
  }}
>
```

### 4. Combine with CSS Modules

Use the component with your own CSS modules for additional styling:

```tsx
import styles from "./MyComponent.module.css";

<Box className={styles.container} display="flex" padding="20px">
  Content
</Box>;
```

## Troubleshooting

### Common Issues

1. **CSS Props Not Working**

   - Ensure you're using the correct prop names (camelCase)
   - Check that the prop is supported by the component
   - Verify the prop value is valid CSS

2. **Responsive Props Not Working**

   - Ensure breakpoint names are correct (`tablet`, `desktop`)
   - Check that the responsive object contains valid CSS props
   - Verify your CSS is being loaded properly

3. **TypeScript Errors**

   - Run `npm run type-check` to identify issues
   - Ensure all imports are correct
   - Check that prop types match expected values

4. **Build Issues**
   - Run `npm run clean` to clear build artifacts
   - Ensure all dependencies are installed
   - Check Rollup configuration for CSS module support

### Getting Help

- Check the [README](README.md) for basic usage
- Review the [examples](examples/) directory
- Run tests with `npm test` to verify functionality
- Check TypeScript errors with `npm run type-check`
