# CLAUDE.md — The Razor's Edge Literary Map

> Project memory for Claude Code. Edit this file when conventions change.

## Project Overview

**razors-edge-map** is a single-file Leaflet.js interactive map tracing Larry Darrell's spiritual journey from W. Somerset Maugham's novel *The Razor's Edge* (1944). The map covers 18 waypoints from Paris to Mumbai via the Mediterranean and India.

**Current state:** Single `index.html` — no build system, no framework. All CSS and JS are inline within the HTML file.

---

## Key Files

| File | Purpose |
|------|---------|
| `index.html` | Complete application — map, data, JS, CSS |
| `SPEC.md` | Architecture, features, design tokens, future ideas |
| `CLAUDE.md` | This file — Claude Code memory |
| `README.md` | Quick-start for contributors |
| `src/` | Reserved for future JS module extraction |
| `assets/` | Reserved for future images/data |

---

## How to Edit Waypoints

Waypoints are defined in a JavaScript array at the bottom of `index.html`:

```javascript
var waypoints = [
  { id: 0, lat: 48.8566, lng: -2.3522, city: 'Paris', zh: '巴黎', note: '...', year: 1919, key: false },
  // ...
];
```

- `id`: unique index (used by `flyToCity(id)`)
- `lat/lng`: decimal coordinates
- `city`: English name (shown on map label)
- `zh`: Chinese name
- `note`: popup description text
- `year`: which year Larry was there
- `key`: `true` for gold star markers (key events)

Sophie is a separate hardcoded marker — search for `SOPHIE_LAT` / `SOPHIE_LNG` in `index.html`.

---

## Navigation Functions

- `flyToCity(id)` — flies to waypoint `id`, opens popup after animation
- `flyToSophie()` — flies to Sophie's marker (Mediterranean open water)
- `flyToYear(yr)` — flies to the first waypoint matching that year

All are triggered by HTML `onclick` attributes in the panels and time ruler.

---

## Design Tokens

```css
--gold:   #c9a84c   /* key markers, titles */
--blue:   #6a9fd8   /* city markers */
--red:    #c46a6a   /* Sophie */
--bg:     #1a1a2e   /* page background */
--panel:  #0a1022   /* panel background */
--text:   #e8d5b0   /* primary text */
```

---

## Git Workflow

The project follows: **local → test → feature → PR → merge**

- Work in a feature branch (`git checkout -b feat/my-feature`)
- Test locally (open `index.html` in browser)
- Commit with conventional message (`feat:`, `fix:`, `docs:`)
- Push to your fork and open a PR against `main`

---

## Adding a New Waypoint

1. Add an entry to the `waypoints` array in `index.html`
2. Use `flyToCity(id)` if you want it clickable from the character panel
3. If it's a key enlightenment moment, set `key: true` for the gold star marker
4. If it's in a new year not yet in the time ruler, add a `<span>` to `.time-ruler`

---

## Leaflet Version

Currently pinned to **1.9.4** via unpkg CDN:

```html
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
```

Check for newer 1.x before upgrading to 2.x (breaking changes expected).
