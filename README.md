# The Razor's Edge Literary Map

An interactive Leaflet.js web map tracing Larry Darrell's spiritual journey from W. Somerset Maugham's novel *The Razor's Edge* (1944). Follow Larry from post-WWI Paris through the Mediterranean, across the Indian subcontinent, to his enlightenment at sea near Suez.

**[Open the map →](index.html)** — just open the HTML file, no server needed.

---

## Features

- **18 waypoints** across Europe, the Middle East, and India
- **3 switchable map layers:** National Geographic, Ocean, OpenStreetMap
- **Click navigation** — click character names or years to fly to locations
- **Bilingual labels** (English + Chinese) for all 18 cities
- **Walter Landor's poem** — the epigraph from Chapter 5 of the novel
- **Sophie's story** — the tragic青梅竹马 who disappears at sea
- **Dark maritime theme** — gold accents on deep navy backgrounds

---

## Quick Start

```bash
# Clone the repository
git clone https://github.com/mariusiaowego-commits/razors-edge-map.git
cd razors-edge-map

# Open in browser (no build step)
open index.html
```

---

## Project Structure

```
razors-edge-map/
├── index.html    # The complete interactive map
├── SPEC.md       # Architecture, features, design tokens
├── CLAUDE.md     # Project memory for Claude Code
├── README.md     # This file
├── src/          # Reserved for future JS modules
└── assets/       # Reserved for future assets
```

---

## How It Works

- **No build step** — everything is a single self-contained `index.html`
- **Leaflet.js 1.9.4** loaded via CDN (unpkg)
- **Tile layers** from Esri and OpenStreetMap
- **All data** lives in a JavaScript `waypoints` array at the bottom of the file

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Make your changes (edit `index.html`)
4. Test locally: open `index.html` in your browser
5. Commit: `git commit -m "feat: your feature description"`
6. Push and open a PR

---

## Credits

- Map built with [Leaflet.js](https://leafletjs.com/)
- Tiles by [Esri](https://www.esri.com/) and [OpenStreetMap](https://www.openstreetmap.org/)
- Novel: *The Razor's Edge* by [W. Somerset Maugham](https://en.wikipedia.org/wiki/W._Somerset_Maugham) (1944)
- Poem: "Dying Speech of an Old Philosopher" by [Walter Savage Landor](https://en.wikipedia.org/wiki/Walter_Savage_Landor)
