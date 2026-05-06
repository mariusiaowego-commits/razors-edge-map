# 📚 Literary Maps · 文学地图集

Interactive literary maps tracing characters, journeys, and themes across great novels.

## Maps

| Novel | Author | Status |
|-------|--------|--------|
| [The Razor's Edge · 刀锋](razors-edge/index.html) | W. Somerset Maugham (1944) | ✅ Complete |
| [The Brothers Karamazov · 卡拉马佐夫兄弟](karamazov/index.html) | Fyodor Dostoevsky (1880) | 🚧 Skeleton |

## Features

- **Single-file architecture** — each map is a self-contained `index.html`, no build step
- **file:// compatible** — open directly in browser, no server needed
- **Dark nautical theme** — deep navy + gold accents
- **Keyboard shortcuts** — `Q` Quote · `L` Routes · `C` Characters · `ESC` Close
- **Bilingual** — English + Chinese content

## Structure

```
literary-maps/
├── index.html              # Entry point — choose a map
├── razors-edge/
│   └── index.html          # The Razor's Edge map (v2.1)
├── karamazov/
│   └── index.html          # The Brothers Karamazov (skeleton)
├── STATUS.md
├── DEVELOPMENT_PLAN.md
├── SPEC.md
└── vibe coding log.md
```

## Tech Stack

- Leaflet.js 1.9.4 (CDN)
- Esri NatGeo basemap
- Pure HTML/CSS/JS — no framework, no build tools

## License

Personal project for literary exploration.
