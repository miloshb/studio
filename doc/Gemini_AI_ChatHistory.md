# Archive: AI Collaboration & Architectural Shift Log

This file preserves the historical context, development decisions, and custom code blocks engineered during the June 2026 infrastructure sprint.

---

## 1. Localized Timezone Translation System

We refactored the schedule overview component from a hardcoded grid to an asynchronous, dual-column timezone translation dashboard.

### Centralized Data Layer (`src/data/schedule.ts`)
```typescript
export interface TimezoneOption {
  value: string;       // IANA String or 'detect'
  label: Record<"en" | "de", string>;
}

export const scheduleData = {
  timezones: [
    { value: "detect", label: { en: "My Local Time  ", de: "Meine Lokalzeit  " } },
    { value: "Europe/Berlin", label: { en: "Studio Time (CET/CEST)  ", de: "Studiozeit (CET/CEST)  " } },
    { value: "America/New_York", label: { en: "US Eastern Time  ", de: "US Ostküstenzeit  " } },
    { value: "America/Chicago", label: { en: "US Central Time  ", de: "US Zentralzeit  " } },
    { value: "Europe/London", label: { en: "London Time  ", de: "Londoner Zeit  " } }
  ],
  startTimes: [ /* ... mapped minute indices ... */ ],
  classes: [ /* ... grid structures ... */ ]
};
```

### Self-Contained Grid Engine (`src/components/ScheduleGrid.astro`)
```astro
---
import { scheduleData } from "../data/schedule.ts";
import { TZ_STORE_KEY } from "../data/constants.js";

const { lang = "en" } = Astro.props;
// Layout parameters, grid tracking calculations, and startTimes loops occur here...
---

<div class="timezone-control-panel">
  <select id="schedule-tz-select" class="tz-dropdown">
    {scheduleData.timezones.map((tz) => (
      <option value={tz.value}>{tz.label[lang]}</option>
    ))}
  </select>
</div>

<div class="schedule-grid" style={`--grid-rows: ${gridRows};`}>
  <!-- Left Time Column: Static Reference -->
  <div class="time-col">
    <div class="day">Time (Studio)</div>
    {scheduleData.startTimes.map((t) => <div class="time">{t.label}</div>)}
  </div>

  <!-- Day Column mappings occur here ... -->

  <!-- Right Time Column: Asynchronous Client Translation -->
  <div class="time-col right-tz-col">
    <div class="day user-tz-label">Time</div>
    {scheduleData.startTimes.map((t) => (
      <div class="time adaptive-time-label" data-minutes={t.minutes}>{t.label}</div>
    ))}
  </div>
</div>

<script define:vars={{ TZ_STORE_KEY }}>
  const dropdown = document.getElementById('schedule-tz-select');
  const timeLabels = document.querySelectorAll('.adaptive-time-label');
  const userHeaderLabel = document.querySelector('.user-tz-label');
  const STUDIO_TIMEZONE = "Europe/Berlin";

  function updateScheduleTimezone(runMode) {
    if (!dropdown || timeLabels.length === 0) return;
    let targetZone = dropdown.value;
    const isInitialRun = runMode === 'boot';

    if (isInitialRun) {
      try {
        const savedZone = localStorage.getItem(TZ_STORE_KEY);
        if (savedZone && dropdown.querySelector(`option[value="${savedZone}"]`)) {
          dropdown.value = savedZone;
          targetZone = savedZone;
        }
      } catch (e) {}
    }

    let calculationZone = targetZone === 'detect' ? Intl.DateTimeFormat().resolvedOptions().timeZone : targetZone;

    if (userHeaderLabel) {
      userHeaderLabel.textContent = calculationZone.split('/').pop()?.replace('_', ' ') || calculationZone;
    }

    const baseDateString = new Date().toISOString().split('T')[0];

    timeLabels.forEach((el) => {
      const rawMinutesStr = el.getAttribute('data-minutes');
      if (!rawMinutesStr) return;
      const totalMinutes = parseInt(rawMinutesStr, 10);
      const studioDateTimeStr = `${baseDateString}T${String(Math.floor(totalMinutes / 60)).padStart(2, '0')}:${String(totalMinutes % 60).padStart(2, '0')}:00`;
      const utcTimestamp = Date.parse(new Date(studioDateTimeStr).toLocaleString('en-US', { timeZone: STUDIO_TIMEZONE }));

      if (!isNaN(utcTimestamp)) {
        el.textContent = new Intl.DateTimeFormat(navigator.language, {
          timeZone: calculationZone, hour: '2-digit', minute: '2-digit', hour12: false
        }).format(new Date(utcTimestamp));
      }
    });

    if (!isInitialRun) {
      try { localStorage.setItem(TZ_STORE_KEY, targetZone); } catch (e) {}
    }
  }

  if (dropdown) {
    dropdown.addEventListener('change', () => updateScheduleTimezone('change'));
    updateScheduleTimezone('boot');
  }
</script>

<style>
  .timezone-control-panel { display: flex; justify-content: flex-end; margin-bottom: var(--space-sm); }
  .tz-dropdown {
    padding: var(--space-xxs) var(--space-xs);
    border: 1px solid var(--color-border);
    background: transparent;
    font-family: var(--font-body);
    font-size: var(--text-sm);
    color: var(--color-text-soft);
    border-radius: var(--radius-md);
    cursor: pointer;
    text-align-last: right;
    direction: ltr;
  }
  .tz-dropdown option { text-align: right; background: var(--color-bg); color: var(--color-text); }
  .right-tz-col { container-type: inline-size; width: 100%; }
  .user-tz-label {
    white-space: nowrap; overflow: hidden;
    font-size: clamp(0.5rem, 14cqw, var(--text-xs)) !important;
    padding: 0 var(--space-xxs);
  }
</style>
```

---

## 2. Refactored Flexbox Layout Geometry

To correct text wrapping breakdowns on narrow desktop viewports (e.g., German navigation strings like *"Über uns"* fracturing), we systematically removed horizontal layout `margin` parameters and moved to Flexbox `gap` tracking layouts combined with `white-space: nowrap`.

### Modern Fluid Header Strategy (`src/components/Header.astro`)
```css
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-sm) 0;
  flex-wrap: wrap;
  gap: var(--space-xs) var(--space-md);
}
.brand {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  transform: translateY(-3px); /* Elevates heading slightly higher than nav baselines */
}
.brand img {
  width: auto; height: auto; /* Restored from 1.25em to enforce original visual scale */
}
.header-nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  column-gap: calc(var(--space-xs) * 2);
  row-gap: var(--space-xxs);
}
.header-nav a { white-space: nowrap; }
.header-nav-2nd { display: contents; } /* Collapses nested div wrapper into direct parent line */
```

### Fluid Footer Item Un-Wrapping (`src/components/Footer.astro`)
```css
.footer-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: calc(var(--space-xs) * 2);
  row-gap: var(--space-xxs);
}
@media (width <= 600px) {
  .header-in-footer-nav {
    display: contents; /* Strips nested container boxes; lets links wrap one by one instead of together */
  }
}
```

---

## 3. Automated Continuous Integration & Verification Pipeline

We designed a unified GitHub Actions workflow to block broken routing addresses or missing index files from corrupting production branches.

### Production Pipeline Workflow (`.github/workflows/production-pipeline.yml`)
```yaml
name: Production Pipeline

on:
  push:
    branches: [ main, stage ]
  pull_request:
    branches: [ main, stage ]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '22.12.0'
          cache: 'npm'

      - name: Install Dependencies
        run: npm ci

      - name: Compile Production Astro Build
        run: npm run build
        env:
          ASTRO_SITE: https://studiosunandsea.com

      - name: Assert Sitemap & Robots.txt Alignment
        run: |
          if [ ! -f ./dist/sitemap-index.xml ]; then
            echo "❌ ERROR: sitemap-index.xml missing!"
            exit 1
          fi
          if ! grep -q "Sitemap: https://studiosunandsea.com" ./dist/robots.txt; then
            echo "❌ ERROR: robots.txt missing index mapping!"
            exit 1
          fi

      - name: Run Dynamic Sitemap URL Validation
        run: npm run test:sitemap

      - name: Scan Entire Site for Broken Internal Links
        run: npm run test:links

  bump-version:
    runs-on: ubuntu-latest
    needs: validate
    if: github.event_name == 'push' && github.ref == 'refs/heads/main'
    permissions:
      contents: write
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '22.12.0'
          cache: 'npm'
      - name: Configure Git
        run: |
          git config --global user.name "github-actions[bot]"
          git config --global user.email "github-actions[bot]@://github.com"
      - name: Evaluate Commits & Bump Version
        run: |
          COMMIT_MSG=$(git log -1 --pretty=%B)
          if [[ "$COMMIT_MSG" == *"[major]"* ]]; then
            npm version major -m "chore: bump version to %s [skip ci]"
          elif [[ "$COMMIT_MSG" == *"[minor]"* ]]; then
            npm version minor -m "chore: bump version to %s [skip ci]"
          else
            npm version patch -m "chore: bump version to %s [skip ci]"
          fi
      - name: Push Version Update to GitHub
        run: git push origin main --follow-tags
```

### Server-Validation Test Orchestration (`package.json`)
```json
"scripts": {
  "build": "astro build",
  "preview": "astro preview",
  "test:sitemap": "linkinator ./dist/sitemap-index.xml --recurse",
