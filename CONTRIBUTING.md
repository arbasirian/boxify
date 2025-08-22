# Contributing to Boxify

Thank you for your interest in contributing to Boxify! This document provides guidelines and information for contributors.

## Git Workflow

### Initial Setup

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/boxify.git
   cd boxify
   ```
3. **Add the upstream remote**:
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/boxify.git
   ```

### Development Workflow

1. **Create a feature branch** from main:
   ```bash
   git checkout main
   git pull upstream main
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** and commit them:
   ```bash
   git add .
   git commit -m "feat: add new CSS property support"
   ```

3. **Push your branch** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Create a Pull Request** on GitHub

### Commit Message Convention

We use conventional commit messages:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Examples:
```bash
git commit -m "feat: add boxShadow and cursor CSS properties"
git commit -m "fix: resolve responsive value type issues"
git commit -m "docs: update README with new examples"
```

### Branch Naming

- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `test/` - Test-related changes

## Development Setup

### Prerequisites

- Node.js 16+ 
- npm or yarn
- Git

### Installation

```bash
npm install
```

### Available Scripts

```bash
npm run dev          # Development mode with watch
npm run build        # Production build
npm run test         # Run tests
npm run lint         # Lint code
npm run type-check   # TypeScript type checking
```

### Development Process

1. **Make changes** to the source code
2. **Run tests** to ensure nothing is broken:
   ```bash
   npm test
   ```
3. **Check types**:
   ```bash
   npm run type-check
   ```
4. **Lint code**:
   ```bash
   npm run lint
   ```
5. **Build** to ensure everything compiles:
   ```bash
   npm run build
   ```

## Code Standards

### TypeScript

- Use strict TypeScript settings
- Provide proper types for all functions and components
- Use interfaces for object shapes
- Prefer `type` for unions and intersections

### React

- Use functional components with hooks
- Use `forwardRef` for components that need refs
- Use `React.memo` for performance optimization when needed
- Follow React best practices

### CSS Properties

- Add new CSS properties to the `CSSProps` interface
- Update the `cssProps` array in the Box component
- Provide responsive support for all new properties
- Document new properties in README.md

### Testing

- Write tests for new features
- Ensure all tests pass before submitting PR
- Use descriptive test names
- Test both basic and responsive functionality

## Pull Request Guidelines

### Before Submitting

1. **Ensure tests pass**:
   ```bash
   npm test
   npm run type-check
   npm run lint
   npm run build
   ```

2. **Update documentation** if needed:
   - README.md
   - ARCHITECTURE.md
   - Examples
   - Demo

3. **Check for breaking changes** and document them

### PR Description

Include:
- **What** the change does
- **Why** the change is needed
- **How** to test the change
- **Screenshots** if UI changes
- **Breaking changes** if any

## Release Process

### Version Bumping

We use semantic versioning:
- `patch` - Bug fixes (0.1.0 → 0.1.1)
- `minor` - New features (0.1.0 → 0.2.0)
- `major` - Breaking changes (0.1.0 → 1.0.0)

### Release Steps

1. **Update version** in package.json
2. **Update CHANGELOG.md** with changes
3. **Create release tag**:
   ```bash
   git tag v0.1.0
   git push origin v0.1.0
   ```
4. **Publish to npm**:
   ```bash
   npm publish
   ```

## Getting Help

- **Issues**: Use GitHub Issues for bugs and feature requests
- **Discussions**: Use GitHub Discussions for questions and ideas
- **Code Review**: All PRs require review before merging

## Code of Conduct

- Be respectful and inclusive
- Focus on the code, not the person
- Provide constructive feedback
- Help others learn and grow

Thank you for contributing to Boxify! 🎉
