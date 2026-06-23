# Studio Sun & Sea — Development, Branching & CI/CD Pipeline

This document defines the code branching topology, active testing suites, and branch-specific Cloudflare deployment infrastructure for the Studio Sun & Sea repository.

## 1. Branch Topology & Environmental Lifecycles

We use a structured branch strategy to catch layout regressions and broken routes before changes reach production.

```text
               [feat/* / fix/*] (Short-Lived Feature Branches)
                     │
                     ▼
  [stage] ────────────────────────► Deploys to Staging Environment
                     │
                     ▼ (Merged after QA confirmation)
  [main]  ────────────────────────► Deploys to Live Production Environment
                     ▲
                     │ (Emergency Override Only)
                [hotfix/*] (Short-Lived Production Patch Branches)
```

### Permanent (Long-Lived) Branches
* **`main`**: Reflects the absolute current live state of production. Direct pushes are protected. Code must pass the validation engine before merging.
* **`stage`**: Our stable staging sandbox environment. All features and translations are integrated here first for layout review.

### Ephemeral (Short-Lived) Branches
* **`feat/*` or `fix/*`**: Branched off `stage` for development isolation. Deleted immediately upon successful merge back into `stage`.
* **`hotfix/*`**: Used **rarely** and only when working off `stage` is unviable. Branched directly off `main` to address critical production issues. Must be merged into *both* `main` and `stage` immediately.

---

## 2. Cloudflare Deployment Mapping Matrix

Cloudflare Pages compiles every single active branch in the repository into its own isolated preview environment sandbox. The target links resolve as follows:

| Git Branch | Deployment Target URL | Environment Purpose |
| :--- | :--- | :--- |
| **`main`** | [studiosunandsea.com](https://studiosunandsea.com) | Live Production Site |
| **`stage`** | [stage.studio-sun-and-sea.pages.dev](https://stage.studio-sun-and-sea.pages.dev) | QA Staging Sandbox |
| `mindbody` | [mindbody.studio-sun-and-sea.pages.dev](https://mindbody.studio-sun-and-sea.pages.dev) | Widget Testing Branch |
| `content` | [content.studio-sun-and-sea.pages.dev](https://content.studio-sun-and-sea.pages.dev) | Content and UI Testing |
| `cm` | [cm.studio-sun-and-sea.pages.dev](https://cm.studio-sun-and-sea.pages.dev) | Configuration Management Testing |
| `feat/*` | `[branch-name].studio-sun-and-sea.pages.dev` | Automated Preview Link |

---

## 3. Automated CI/CD Testing & Production Validation

Automated test pipeline is configured natively via GitHub Actions inside `.github/workflows/production-pipeline.yml`. It evaluates automatically on every push event or Pull Request targeting `main` or `stage`.

### Test Coverage Checklist
1. **Compilation Step**: Compiles the final production output into the static `./dist` matrix layout folder.
2. **Compilation Validation**: Asserts that `sitemap-index.xml` compiles cleanly without truncation bugs.
3. **Configuration Sync**: Verifies that `public/robots.txt` contains the correct absolute path matching the sitemap tracking string.
4. **Link Health Integrity (Linkinator)**: Spins up a local background preview server instance to mimic Cloudflare's serving layer and crawls all links to guarantee **zero internal 404 broken routes**.
5. **Automated Release Bumping**: Semantic versions (`npm version`) are calculated and pushed **only** upon successful validation landing on the `main` branch.
6. **AI Agent Scan**: Check conformance to standards for agentic commerce: [AI Agent Scan Remediation](../security/com.isitagentready.md)

---
*Last Checked: June 2026*
