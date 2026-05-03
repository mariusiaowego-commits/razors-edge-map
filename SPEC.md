# The Razor's Edge Literary Map — Specification

## 1. Project Overview

**What is this?**
An interactive Leaflet.js web map tracing Larry Darrell's spiritual pilgrimage from W. Somerset Maugham's 1944 novel *The Razor's Edge*. The map spans the Mediterranean and South Asia, following Larry's quest for an absolute answer to "the why of things" after surviving World War I as a fighter pilot.

**Live demo:** Open `index.html` in any modern browser — no build step, no server required.

---

## 2. Architecture

### Technology Stack
- **Mapping:** Leaflet.js 1.9.4 via CDN (unpkg)
- **Tiles:** Esri National Geographic, Esri Ocean, OpenStreetMap — switchable via layer control
- **Delivery:** Single self-contained HTML file (`index.html`)
- **No bundler, no framework, no dependencies to install**

### File Structure
```
razors-edge-map/
├── index.html        # The complete map (all JS/CSS inline)
├── SPEC.md           # This document
├── CLAUDE.md         # Project memory for Claude Code
├── README.md         # Quick-start guide
├── src/              # Future JS modules (not yet modularized)
└── assets/           # Future images, fonts, data files
```

### Why a Single HTML File?
- Zero friction: download and open — it just works
- CDN-hosted Leaflet means no npm dependency chain
- Easy to archive, share, or host on GitHub Pages / Netlify / Vercel
- Future work may extract waypoint data into `src/data/waypoints.json`

---

## 3. Current Features

### Map & Navigation
- **18 waypoints** from Paris → Marseille → Monaco → Nice → Parm → Rome → Istanbul → Athens → Rhodes → Jerusalem → Cairo → Ahmedabad → Delhi → Agra → Udaipur → Bengal → Mumbai → Suez
- **Dashed polyline** connecting all waypoints (Larry's route)
- **3 switchable tile layers:** NatGeo, Ocean, OSM
- **Click-to-navigate:** clicking a city name in the character panel flies to that waypoint
- **Year-based navigation:** clicking a year (1919/1920/1921/1922/1924) in the time ruler jumps to that era's first waypoint

### Markers
- City labels with bilingual names (English + Chinese)
- Circle markers: blue for regular stops, gold (★) for key events (Athens + Suez enlightenment moments)
- Special Sophie marker: red ✕ in the Mediterranean marking her mysterious disappearance at sea (~1921)

### UI Panels
- **Character panel** (left): 5 characters with click-to-locate
- **Poem panel** (bottom-left): Walter Landor's "Dying Speech of an Old Philosopher" — the poem quoted in Chapter 5 of the novel and used as the book's epigraph
- **Sophie card** (right): tragic backstory + click-to-locate
- **Legend** (bottom-center-right): route line, city/key/missing markers
- **Time ruler** (bottom-center): year scrubber

### Design Language
- **Dark maritime theme:** deep navy backgrounds (`#1a1a2e`, `#0a1428`)
- **Gold accent:** `#c9a84c` — used for titles, key markers, year highlights
- **Blue:** `#6a9fd8` — standard city markers
- **Red:** `#c46a6a` — Sophie, danger, tragedy
- **Typography:** Courier New monospace — literary, typewriter feel

---

## 4. Future Enhancement Ideas

These are documented here for reference. Not implemented — just dreaming.

- [ ] **Multi-work support:** Add other literary journeys — *The Alchemist* (Santiago's Egyptian quest), *On the Road* (Sal Paradise's cross-country), *Invisible Man* (Harlem to the South)
- [ ] **Timeline slider:** A draggable component below the map spanning 1914–1924, with animated route-drawing as you scrub
- [ ] **Character relationship graph overlay:** An SVG/Canvas panel showing connections between Larry, Isabel, Sophie, Mrs. Bradshaw, Gray
- [ ] **Mobile-responsive redesign:** Collapsible panels, touch-friendly zoom, bottom sheet instead of side panels
- [ ] **Multi-language:** EN/CN/JP toggle — the novel exists in all three; add i18n JSON data
- [ ] **PDF export / print mode:** A `@media print` stylesheet + puppeteer script for clean A4 atlas pages
- [ ] **Data-driven waypoints:** Extract `waypoints` array into `src/data/waypoints.json` with richer fields (pages, quotes, image URLs)
- [ ] **Animated route drawing on load:** Use Leaflet.animatedMarker or a custom polyline animation on first load
- [ ] **Photo gallery per city:** Historical photos from the novel's era (1920s Paris, Bombay, etc.)
- [ ] **"Compare editions" mode:** Toggle between real geography and Maugham's fictionalized versions of places

---

## 5. Key Literary References

- **The Razor's Edge** by W. Somerset Maugham (1944)
- **Walter Savage Landor** (1775–1864) — "Dying Speech of an Old Philosopher" (used as epigraph in Chapter 5)
- **Key chapters:** The novel spans Parts One through Four; Larry's European travels in Part One, Indian spiritual awakening in Parts Two–Three, return via Suez in Part Four

---

## 6. Color Palette

| Token      | Hex       | Usage                          |
|------------|-----------|-------------------------------|
| `gold`     | `#c9a84c` | Key markers, titles, years    |
| `blue`     | `#6a9fd8` | City markers                   |
| `red`      | `#c46a6a` | Sophie, danger                 |
| `bg-dark`  | `#1a1a2e` | Page background                |
| `bg-panel` | `#0a1022` | Panel backgrounds              |
| `text`     | `#e8d5b0` | Primary text (warm cream)      |
| `text-muted`| `#8a8a7a`| Secondary text                 |
