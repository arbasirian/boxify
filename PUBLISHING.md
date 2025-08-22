# Publishing Guide

This guide explains how to publish the Boxify React library to npm, including both manual and automated publishing via GitHub Actions.

## 🚀 **Publishing Options**

### **Option 1: Automated Publishing (Recommended)**
- **GitHub Actions**: Automatically publish on git tags
- **CI/CD Pipeline**: Full testing and validation before publish
- **Zero Configuration**: Set up once, publish automatically

### **Option 2: Manual Publishing**
- **Direct npm publish**: Manual control over when to publish
- **Local validation**: Run checks locally before publishing

## 🔄 **Automated Publishing with GitHub Actions**

### **Setup Required**
1. **NPM_TOKEN Secret**: Add your npm access token to GitHub Secrets
2. **Workflow Files**: Already configured in `.github/workflows/`
3. **Tag-based Publishing**: Only publishes when you create git tags

### **How It Works**
1. **Push to main**: Runs CI checks only
2. **Create git tag**: Triggers full CI + publish workflow
3. **Automatic**: Tests, builds, publishes, creates GitHub release

### **Publishing Commands**
```bash
# Create and push a tag to trigger publishing
git tag v0.1.0
git push origin v0.1.0

# Or create annotated tag
git tag -a v0.1.0 -m "Release 1.0.0"
git push origin v0.1.0
```

### **Workflow Steps**
1. ✅ **CI Checks**: Test, build, lint, type-check
2. ✅ **Build Package**: Create production bundle
3. ✅ **Publish to npm**: Automatic npm publication
4. ✅ **Create Release**: GitHub release with changelog

## 📋 **Prerequisites**

### 1. npm Account
- Create an npm account at [npmjs.com](https://www.npmjs.com)
- Verify your email address
- Enable two-factor authentication (recommended)

### 2. npm Login
```bash
npm login
```

### **Package Scope**
Since we're using `@ar.basirian/react`, you'll be publishing under your personal npm scope:
- This will be published as `@ar.basirian/react`
- No organization setup required
- Package will be public and accessible to everyone

### 4. GitHub Actions Setup
- **NPM_TOKEN**: Add to GitHub repository secrets
- **Workflows**: Already configured in `.github/workflows/`
- **Branch Protection**: Recommended for main branch

## 🔐 **GitHub Actions Setup**

### **Required Secret: NPM_TOKEN**
1. **Create npm token:**
   ```bash
   npm login
   npm token create --read-only
   ```

2. **Add to GitHub Secrets:**
   - Go to your repository → Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `NPM_TOKEN`
   - Value: Your npm access token

### **Workflow Files**
- **`ci.yml`**: Continuous integration on every push
- **`publish.yml`**: Publishing workflow on tags
- **`security.yml`**: Security audits and dependency checks

## 🚀 **Publishing Process**

### **Automated (Recommended)**
```bash
# 1. Make your changes and commit
git add .
git commit -m "feat: new feature"
git push origin main

# 2. Create a release tag
git tag v0.1.0
git push origin v0.1.0

# 3. GitHub Actions automatically:
#    - Runs all tests
#    - Builds the package
#    - Publishes to npm
#    - Creates GitHub release
```

### **Manual Publishing**
```bash
# Clean and build
npm run clean
npm run build

# Run all checks
npm run test
npm run type-check
npm run lint
npm run size

# Publish to npm
npm publish --access public
```

## 🔄 **Update Process**

### **Automated Updates**
```bash
# 1. Update version in package.json
npm version patch    # 0.1.0 → 0.1.1
npm version minor    # 0.1.0 → 0.2.0
npm version major    # 0.1.0 → 1.0.0

# 2. Push changes and tag
git push origin main
git push origin --tags

# 3. GitHub Actions handles the rest!
```

### **Manual Updates**
```bash
# Update version
npm version patch

# Update changelog
# ... edit CHANGELOG.md ...

# Publish
npm publish --access public
```

## 📦 **Package Configuration**

### package.json Fields

```json
{
  "name": "@ar.basirian/react",
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

## 🧪 **Pre-publish Checks**

### **Automated Checks (GitHub Actions)**
The workflows automatically run:
- ✅ Build (`npm run build`)
- ✅ Test (`npm test`)
- ✅ Type check (`npm run type-check`)
- ✅ Lint (`npm run lint`)
- ✅ Bundle size check (`npm run size`)

### **Manual Checks**
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

## 🔐 **Security**

### **Two-Factor Authentication**
Enable 2FA on your npm account for security.

### **Access Control**
- Use `"access": "public"` for public packages
- Scoped packages (`@ar.basirian/react`) are public by default

### **Personal Scope**
- `@ar.basirian/react` uses your personal npm scope
- No organization permissions required
- Package will be publicly accessible

### **GitHub Actions Security**
- NPM_TOKEN is encrypted and secure
- Workflows run in isolated environments
- No sensitive data exposed in logs

## 📊 **Post-Publish**

### **1. Monitor Downloads**
```bash
npm stats @ar.basirian/react
```

### **2. Check Bundle Size**
- [Bundlephobia](https://bundlephobia.com/result?p=@ar.basirian/react)
- [npm bundle size](https://bundlephobia.com/)

### **3. Update Documentation**
- Update GitHub repository
- Update README badges
- Update any external references

### **4. Monitor GitHub Actions**
- Check Actions tab for workflow status
- Review logs for any issues
- Verify npm publication success

## 🚨 **Troubleshooting**

### **Common Issues**

#### **1. Package Name Already Taken**
```bash
# Check if name is available
npm search @ar.basirian/react

# The name should be available under your scope
```

#### **2. Permission Denied**
```bash
# Check npm user
npm whoami

# Login again
npm login
```

#### **3. Build Failures**
```bash
# Clean and rebuild
npm run clean
npm run build

# Check for TypeScript errors
npm run type-check
```

#### **4. GitHub Actions Failures**
- Check NPM_TOKEN secret is set
- Verify workflow file syntax
- Check for Node.js version compatibility
- Review workflow logs for specific errors

### **Error Messages**

#### "You must be logged in to publish packages"
```bash
npm login
```

#### "Package name must be lowercase"
Check package.json name field.

#### "Access denied"
Use `--access public` for scoped packages.

#### "Workflow failed"
Check GitHub Actions tab for detailed error logs.

## 📈 **Best Practices**

### **1. Semantic Versioning**
- `patch`: Bug fixes (0.1.0 → 0.1.1)
- `minor`: New features (0.1.0 → 0.2.0)
- `major`: Breaking changes (0.1.0 → 1.0.0)

### **2. Tag Management**
- Use annotated tags: `git tag -a v1.0.0 -m "Release 1.0.0"`
- Tag only for releases, not every commit
- Follow semantic versioning conventions

### **3. Automated Workflows**
- Let GitHub Actions handle CI/CD
- Focus on code quality, not manual processes
- Use tags to trigger releases

### **4. Documentation**
- Keep README updated
- Include examples
- Document breaking changes
- Update CHANGELOG.md

## 🔗 **Useful Links**

- [npm Publishing Guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [npm CLI Commands](https://docs.npmjs.com/cli/v8/commands)
- [Package.json Reference](https://docs.npmjs.com/cli/v8/configuring-npm/package-json)
- [Scoped Packages](https://docs.npmjs.com/about-scopes)
- [GitHub Actions Guide](GITHUB_ACTIONS.md)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

*This guide covers both manual and automated npm publishing with GitHub Actions.*
