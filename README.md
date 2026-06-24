# AI-Powered Digital Twin of India's Climate

A proof-of-concept, browser-native dashboard for exploring an AI-powered digital twin of India's climate using national datasets from IMD, ISRO/MOSDAC, Bhuvan, and satellite-derived INSAT products.

The dashboard demonstrates:

- High-resolution rainfall and temperature monitoring over a selected Indian pilot region.
- AI-style short-term prediction cards for monsoon, heat-stress, drought, and flood-risk signals.
- Interactive geospatial visualization with district-level climate cells.
- What-if scenario controls for rainfall and temperature anomalies.
- A scalable data pipeline blueprint for integrating IMD gridded rainfall/temperature, INSAT LST/SST/rainfall, and reanalysis datasets.

## Run locally

This project is intentionally dependency-free. Open `index.html` directly in a browser, or serve the directory with any static file server:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Dataset references

- IMD gridded rainfall (0.25° × 0.25°)
- IMD maximum temperature (1.0° × 1.0°)
- IMD minimum temperature (1.0° × 1.0°)
- MOSDAC INSAT products: `3RIMG_L2B_LST`, `3RIMG_L2B_SST`, `3RIMG_L2B_IMC`

The current PoC uses representative synthetic climate cells so the UI and simulation workflow can be demonstrated without requiring protected data downloads or API credentials.
