# GitHub Actions Setup Guide

This guide explains how to set up and use GitHub Actions for automated CI/CD and npm publishing of the Boxify React library.

## 🚀 **Workflows Overview**

### **1. CI Workflow** (`ci.yml`)
- **Triggers**: Push to `main`/`develop`, Pull Requests
- **Purpose**: Test, build, and validate code quality
- **Node Versions**: 16, 18, 20 (matrix testing)
- **Artifacts**: Build outputs for each Node version

### **2. Publish Workflow** (`publish.yml`)
- **Triggers**: Push to `main`, Git tags (`v*`)
- **Purpose**: Publish package to npm, create GitHub releases
- **Condition**: Only publishes on tag pushes
- **Security**: Requires NPM_TOKEN secret

### **3. Security Workflow** (`security.yml`)
- **Triggers**: Weekly schedule, push to `main`, PRs
- **Purpose**: Security audits, dependency updates
- **Schedule**: Every Sunday at midnight UTC

## 🔐 **Required Secrets**

### **NPM_TOKEN**
You need to create an npm access token for automated publishing:

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

### **GITHUB_TOKEN**
This is automatically provided by GitHub Actions - no setup required.

## 📋 **Setup Instructions**

### **1. Enable GitHub Actions**
- Actions are automatically enabled when you push the workflow files
- Go to Actions tab to monitor workflow runs

### **2. Configure Branch Protection (Recommended)**
```bash
# Protect main branch
git branch --set-upstream-to=origin/main main
```

**In GitHub Settings:**
- Repository → Settings → Branches
- Add rule for `main` branch
- Require status checks to pass before merging
- Require branches to be up to date before merging

### **3. First Publication**
```bash
# Create and push a tag to trigger publishing
git tag v0.1.0
git push origin v0.1.0
```

## 🔄 **Workflow Triggers**

### **CI Workflow**
```yaml
on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]
```

**Triggers when:**
- ✅ Push to `main` or `develop` branches
- ✅ Create/update pull requests
- ✅ Merge pull requests

### **Publish Workflow**
```yaml
on:
  push:
    branches: [ main ]
    tags: [ 'v*' ]
```

**Triggers when:**
- ✅ Push to `main` branch (runs CI only)
- ✅ Push git tags starting with `v` (runs CI + publish)

### **Security Workflow**
```yaml
on:
  schedule:
    - cron: '0 0 * * 0'  # Weekly on Sundays
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
```

**Triggers when:**
- ✅ Weekly scheduled run (Sundays)
- ✅ Push to `main` branch
- ✅ Pull requests

## 📦 **Publishing Process**

### **Automatic Publishing**
1. **Create a tag:**
   ```bash
   git tag v0.1.0
   git push origin v0.1.0
   ```

2. **Workflow runs:**
   - CI checks pass
   - Package builds successfully
   - Package publishes to npm
   - GitHub release created

### **Manual Publishing (if needed)**
```bash
# Login to npm
npm login

# Publish manually
npm publish --access public
```

## 🧪 **CI/CD Pipeline**

### **CI Steps (Every Push)**
1. **Checkout code**
2. **Setup Node.js** (multiple versions)
3. **Install dependencies** (`npm ci`)
4. **Run tests** (`npm test`)
5. **Type check** (`npm run type-check`)
6. **Lint code** (`npm run lint`)
7. **Build package** (`npm run build`)
8. **Check bundle size** (`npm run size`)
9. **Upload artifacts**

### **Publish Steps (Tag Only)**
1. **All CI steps above**
2. **Publish to npm** (if tag)
3. **Create GitHub release** (if tag)

## 📊 **Monitoring & Debugging**

### **Workflow Status**
- **Green**: All checks passed
- **Yellow**: Workflow running
- **Red**: Workflow failed

### **View Logs**
1. Go to Actions tab
2. Click on workflow run
3. Click on job
4. Click on step to see logs

### **Common Issues**

#### **Build Failures**
```bash
# Check locally
npm run build
npm run test
npm run type-check
```

#### **Publish Failures**
- Check NPM_TOKEN secret is set
- Verify npm package name availability
- Check for version conflicts

#### **Test Failures**
```bash
# Run tests locally
npm test

# Check for linting issues
npm run lint
```

## 🔧 **Customization**

### **Modify Node Versions**
```yaml
strategy:
  matrix:
    node-version: [16, 18, 20, 21]  # Add/remove versions
```

### **Add More Checks**
```yaml
- name: Additional check
  run: npm run custom-check
```

### **Change Schedule**
```yaml
schedule:
  - cron: '0 0 * * 1'  # Mondays instead of Sundays
```

## 📈 **Best Practices**

### **1. Tag Management**
- Use semantic versioning: `v1.0.0`, `v1.1.0`, `v2.0.0`
- Create tags for releases, not every commit
- Use annotated tags: `git tag -a v1.0.0 -m "Release 1.0.0"`

### **2. Branch Strategy**
- `main`: Production-ready code
- `develop`: Development branch
- Feature branches: `feature/name`
- Hotfix branches: `hotfix/issue`

### **3. Commit Messages**
```
feat: add new feature
fix: resolve bug
docs: update documentation
style: formatting changes
refactor: code restructuring
test: add tests
chore: maintenance tasks
```

### **4. Pull Request Process**
1. Create feature branch
2. Make changes
3. Run tests locally
4. Create PR
5. CI checks run automatically
6. Review and merge

## 🚨 **Troubleshooting**

### **Workflow Not Running**
- Check `.github/workflows/` directory exists
- Verify workflow file syntax
- Check branch names match

### **Permission Issues**
- Verify NPM_TOKEN secret is set
- Check npm account permissions
- Ensure package name is available

### **Build Failures**
- Check Node.js version compatibility
- Verify all dependencies are installed
- Check for TypeScript errors

## 🔗 **Useful Links**

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [npm Publishing Guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [Workflow Syntax Reference](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)
- [GitHub Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)

---

*This guide covers the complete GitHub Actions setup for automated CI/CD and npm publishing.*
