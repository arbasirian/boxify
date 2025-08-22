# Publishing Guide

This guide explains how to publish the Boxify React library to npm.

## 📋 Prerequisites

### 1. npm Account
- Create an npm account at [npmjs.com](https://www.npmjs.com)
- Verify your email address
- Enable two-factor authentication (recommended)

### 2. npm Login
```bash
npm login
```

### 3. Package Scope
Since we're using `@arbasirian/react`, you'll be publishing under your personal npm scope:
- This will be published as `@arbasirian/react`
- No organization setup required
- Package will be public and accessible to everyone

## 🚀 Publishing Process

### 1. Prepare for Publishing

```bash
# Clean and build
npm run clean
npm run build

# Run all checks
npm run test
npm run type-check
npm run lint
npm run size
```

### 2. Check Package Contents

```bash
# See what will be published
npm pack --dry-run

# This will show the contents of the package
```

### 3. Publish to npm

```bash
# Publish to npm (public access for scoped packages)
npm publish --access public
```

### 4. Verify Publication

```bash
# Check if package is published
npm view @arbasirian/react

# Install the published package
npm install @arbasirian/react
```

## 🔄 Update Process

### 1. Version Management

```bash
# Patch version (bug fixes)
npm version patch

# Minor version (new features)
npm version minor

# Major version (breaking changes)
npm version major
```

### 2. Update Changelog
Update `CHANGELOG.md` with the new version and changes.

### 3. Publish Update
```bash
npm publish --access public
```

## 📦 Package Configuration

### package.json Fields

```json
{
  "name": "@arbasirian/react",
  "version": "0.1.0",
  "description": "A lightweight, performant React component library...",
  "main": "dist/index.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "files": ["dist", "README.md", "LICENSE"],
  "publishConfig": {
    "access": "public"
  }
}
```

### .npmignore
Controls what gets excluded from the published package:
- Source files (`src/`)
- Development files (`.eslintrc.js`, `jest.config.js`)
- Test files (`*.test.ts`, `*.spec.ts`)
- Documentation (except README.md and LICENSE)

## 🧪 Pre-publish Checks

### Automated Checks
The `prepublishOnly` script runs automatically:
```json
{
  "scripts": {
    "prepublishOnly": "npm run build && npm run test && npm run type-check"
  }
}
```

### Manual Checks
```bash
# Build
npm run build

# Test
npm test

# Type check
npm run type-check

# Lint
npm run lint

# Check bundle size
npm run size

# Verify package contents
npm pack --dry-run
```

## 🔐 Security

### Two-Factor Authentication
Enable 2FA on your npm account for security.

### Access Control
- Use `"access": "public"` for public packages
- Scoped packages (`@arbasirian/react`) are public by default

### Personal Scope
- `@arbasirian/react` uses your personal npm scope
- No organization permissions required
- Package will be publicly accessible

## 📊 Post-Publish

### 1. Monitor Downloads
```bash
npm stats @arbasirian/react
```

### 2. Check Bundle Size
- [Bundlephobia](https://bundlephobia.com/result?p=@arbasirian/react)
- [npm bundle size](https://bundlephobia.com/)

### 3. Update Documentation
- Update GitHub repository
- Update README badges
- Update any external references

## 🚨 Troubleshooting

### Common Issues

#### 1. Package Name Already Taken
```bash
# Check if name is available
npm search @arbasirian/react

# The name should be available under your scope
```

#### 2. Permission Denied
```bash
# Check npm user
npm whoami

# Login again
npm login
```

#### 3. Build Failures
```bash
# Clean and rebuild
npm run clean
npm run build

# Check for TypeScript errors
npm run type-check
```

### Error Messages

#### "You must be logged in to publish packages"
```bash
npm login
```

#### "Package name must be lowercase"
Check package.json name field.

#### "Access denied"
Use `--access public` for scoped packages.

## 📈 Best Practices

### 1. Semantic Versioning
- `patch`: Bug fixes (0.1.0 → 0.1.1)
- `minor`: New features (0.1.0 → 0.2.0)
- `major`: Breaking changes (0.1.0 → 1.0.0)

### 2. Changelog
- Keep detailed changelog
- Document breaking changes
- Include migration guides

### 3. Testing
- Test before publishing
- Use CI/CD for automated testing
- Test in different environments

### 4. Documentation
- Keep README updated
- Include examples
- Document breaking changes

## 🔗 Useful Links

- [npm Publishing Guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [npm CLI Commands](https://docs.npmjs.com/cli/v8/commands)
- [Package.json Reference](https://docs.npmjs.com/cli/v8/configuring-npm/package-json)
- [Scoped Packages](https://docs.npmjs.com/about-scopes)

---

*Last updated: August 2024*
