# Boxify React - Quick Start Guide

Get up and running with Boxify React in minutes! This guide will walk you through the basics of using the enhanced Box component.

## 🚀 Installation

```bash
npm install boxify-react
```

## 📱 Basic Usage

### Simple Box

```tsx
import { Box } from "boxify-react";

function App() {
  return (
    <Box padding="20px" backgroundColor="#f0f0f0" borderRadius="8px">
      Hello, Boxify!
    </Box>
  );
}
```

### Responsive Design

```tsx
<Box
  // Mobile styles (default)
  fontSize="16px"
  padding="16px"
  // Tablet styles (768px+)
  tablet={{
    fontSize: "18px",
    padding: "24px",
  }}
  // Desktop styles (1024px+)
  desktop={{
    fontSize: "20px",
    padding: "32px",
  }}
>
  Responsive content
</Box>
```

## 🎨 Common Patterns

### Layout Container

```tsx
<Box
  display="flex"
  flexDirection="column"
  gap="20px"
  padding="20px"
  backgroundColor="white"
  borderRadius="8px"
  boxShadow="0 2px 8px rgba(0,0,0,0.1)"
>
  <Box fontSize="24px" fontWeight="bold">
    Card Title
  </Box>
  <Box fontSize="16px" lineHeight="1.6">
    Card content goes here...
  </Box>
</Box>
```

### Grid Layout

```tsx
<Box
  display="grid"
  gridTemplateColumns="1fr"
  gap="20px"
  padding="20px"
  tablet={{
    gridTemplateColumns: "repeat(2, 1fr)",
  }}
  desktop={{
    gridTemplateColumns: "repeat(3, 1fr)",
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

## 🔧 Key Features

### 1. Polymorphic Rendering

```tsx
// Render as different HTML elements
<Box as="section" padding="20px">Section content</Box>
<Box as="span" fontSize="14px">Inline text</Box>
<Box as="label" htmlFor="input">Form label</Box>
```

### 2. CSS Custom Properties

The component automatically converts props to CSS custom properties:

```tsx
<Box fontSize="18px" color="#333">
  {/* Generates: font-size: var(--font-size, 18px); color: var(--color, #333); */}
</Box>
```

### 3. Responsive Fallbacks

CSS variables cascade from mobile → tablet → desktop:

```css
/* Generated CSS */
.box {
  font-size: var(--font-size, 16px);
}

@media (min-width: 768px) {
  .box {
    font-size: var(--font-size-tablet, var(--font-size, 16px));
  }
}

@media (min-width: 1024px) {
  .box {
    font-size: var(
      --font-size-desktop,
      var(--font-size-tablet, var(--font-size, 16px))
    );
  }
}
```

## 📱 Breakpoints

- **Mobile**: 0px - 767px (default)
- **Tablet**: 768px+
- **Desktop**: 1024px+

## 🎯 Best Practices

### 1. Mobile-First Approach

```tsx
// ✅ Start with mobile, override for larger screens
<Box
  fontSize="14px"
  padding="10px"
  tablet={{ fontSize: "16px", padding: "20px" }}
  desktop={{ fontSize: "18px", padding: "30px" }}
>
```

### 2. Use Semantic Elements

```tsx
// ✅ Choose appropriate HTML elements
<Box as="section" padding="20px">
  <Box as="h2" fontSize="24px" fontWeight="bold">
    Title
  </Box>
  <Box as="p" fontSize="16px">
    Content
  </Box>
</Box>
```

### 3. Combine with CSS Modules

```tsx
import styles from "./MyComponent.module.css";

<Box className={styles.container} display="flex" padding="20px">
  Content
</Box>;
```

## ⚡ Performance

### Bundle Size

- **JavaScript**: ~17.5 KB → **4.1 KB gzipped**
- **CSS**: ~21.4 KB → **3.9 KB gzipped**
- **Total**: **~8.0 KB gzipped**

### Why It's Fast

- **Zero Runtime**: All styling via CSS custom properties
- **No JavaScript**: Pure CSS-based responsive design
- **Tree Shaking**: Only imports what you use
- **Optimized CSS**: Minified and merged media queries

### Performance Commands

```bash
# Check bundle sizes
npm run size

# Check gzipped sizes
npm run size:gzip
```

## 🔍 Troubleshooting

### Common Issues

1. **Props not working?**

   - Check prop names (use camelCase)
   - Verify the prop is supported
   - Ensure values are valid CSS

2. **Responsive not working?**

   - Use `tablet` and `desktop` (not `mobile`)
   - Check breakpoint values
   - Verify CSS is loading

3. **TypeScript errors?**
   - Run `npm run type-check`
   - Check imports
   - Verify prop types

### Getting Help

- 📚 [Full API Documentation](API.md)
- 📖 [README](README.md)
- 💡 [Examples](examples/)
- 🧪 Run tests: `npm test`
- 🔍 Type check: `npm run type-check`

## 🚀 Next Steps

1. **Explore Examples**: Check the `examples/` directory
2. **Read API Docs**: Review [API.md](API.md) for complete reference
3. **Build Something**: Start with a simple layout and expand
4. **Customize**: Add your own CSS modules for additional styling

Happy coding with Boxify React! 🎉
