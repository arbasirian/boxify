# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.13] - 2024-09-06

### Added

- **Performance Monitoring**: Added `size:gzip` script for accurate bundle size analysis
- **Enhanced Documentation**: Updated README and API docs with current performance metrics
- **Bundle Size Analysis**: Comprehensive performance documentation with gzipped sizes

### Changed

- **Updated Bundle Sizes**: Corrected documentation to reflect actual bundle sizes
  - JavaScript: ~17.5 KB (4.1 KB gzipped)
  - CSS: ~21.4 KB (3.9 KB gzipped)
  - Total: ~8.0 KB gzipped
- **Performance Documentation**: Enhanced performance section with comparison data
- **Build Scripts**: Improved size analysis scripts for better development experience

### Technical Details

- **Accurate Metrics**: All documentation now reflects actual measured bundle sizes
- **Performance Comparison**: Added comparison data vs other CSS-in-JS libraries
- **Development Tools**: Enhanced build scripts for performance monitoring
- **Documentation**: Comprehensive performance section across all docs

## [0.1.8] - 2024-12-19

### Added

- **Comprehensive Default Values**: Added sensible fallback values for all CSS properties
- **Smart Fallback System**: Complete fallback chain from desktop → tablet → mobile → defaults
- **Enhanced CSS Architecture**: Merged media queries for better performance and maintainability
- **Complete CSS Coverage**: All Box component props now have corresponding CSS classes
- **Robust Error Handling**: Component gracefully handles missing props with intelligent defaults

### Changed

- **CSS Organization**: Consolidated all media queries into single tablet and desktop blocks
- **Performance Optimization**: Reduced CSS bundle size through merged media queries
- **Default Value Strategy**: Implemented comprehensive fallback system for all CSS properties
- **CSS Variable Fallbacks**: Enhanced responsive system with proper CSS variable cascading
- **Build Optimization**: Improved Rollup configuration for better tree shaking

### Technical Details

- **CSS Architecture**: Single media query blocks for tablet (768px+) and desktop (1024px+)
- **Fallback System**: Three-tier fallback: desktop → tablet → mobile → defaults
- **Bundle Size**: Optimized to ~18.9 KB with merged CSS and efficient bundling
- **Type Safety**: Maintained full TypeScript support with enhanced prop validation
- **Performance**: Zero runtime overhead with CSS custom properties approach

## [0.1.7] - 2024-01-XX

### Added

- **Box Component**: Flexible React component that accepts all CSS styles as props
- **Responsive System**: Built-in responsive breakpoint system (mobile, tablet, desktop)
- **Display Props**: Comprehensive display property support with responsive values
- **CSS Properties**: Support for layout, box model, spacing, border, background, typography, flexbox, grid, transform, overflow, and additional properties
- **Type Safety**: Full TypeScript support with comprehensive types
- **Build System**: Rollup-based bundling with multiple output formats
- **Testing**: Jest setup with React Testing Library
- **Documentation**: Comprehensive README and examples

### Technical Details

- **Breakpoints**: mobile (0px+), tablet (768px+), desktop (1024px+)
- **Responsive Values**: Support for breakpoint-specific CSS values
- **Performance**: Optimized with CSS custom properties for zero runtime overhead
- **Custom Elements**: Support for rendering as div, span, label, or section via `as` prop
- **CSS Architecture**: Uses CSS variables with responsive fallbacks

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
