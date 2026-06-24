# ClimateVerse — National Climate Digital Twin of India

**Predict. Simulate. Adapt.**

ClimateVerse is a production-grade architecture and interface for an AI-powered national climate command center for India. It is designed for ISRO, IMD, NDMA, state disaster authorities, agriculture departments, water resource teams, urban planning agencies, and senior policymakers.

## Capabilities

- Cinematic Three.js India-focused Earth hero with satellite-orbit visual language.
- Global Command Center with national KPIs, trends, confidence intervals, and forecast direction.
- Digital Twin Map concept with district/state boundaries, river basins, watersheds, terrain/satellite mode, layer controls, and a national risk fabric.
- District Digital Twin intelligence panel covering population, basin, risk indices, vulnerability, and AI recommendations.
- AI Forecasting Center for LSTM, Transformer, Graph Neural Network, and Physics-Informed Neural Network model outputs.
- ClimateGPT right-side assistant for forecast explanation, uncertainty explanation, reports, and intervention recommendations.
- Simulation Lab for temperature, rainfall, population, urbanization, deforestation, groundwater, carbon, and reservoir scenarios.
- Satellite, disaster, agriculture, water, finance, executive war room, report generation, and multilingual module shells.
- FastAPI backend starter, Docker Compose, Kubernetes manifest, and synthetic India-like operational demo data.

## Stack

- Frontend: Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Three.js, Recharts, Zustand, Deck.gl/Mapbox-ready dependencies.
- Backend: FastAPI, Python.
- Data layer target: PostgreSQL/PostGIS and Redis.
- AI target: PyTorch, TensorFlow, XGBoost, GNN, LSTM, Transformer, and PINN model services.
- Deployment: Docker and Kubernetes.

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

API only:

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Full stack with data services:

```bash
docker compose up --build
```

## National datasets designed for integration

- IMD gridded rainfall 0.25° × 0.25°.
- IMD maximum and minimum temperature 1.0° × 1.0°.
- MOSDAC INSAT products: `3RIMG_L2B_LST`, `3RIMG_L2B_SST`, `3RIMG_L2B_IMC`.
- Bhuvan, NICES, river basin/watershed layers, Sentinel, Landsat, ERA5, GPM, MODIS, AQI, reservoir, groundwater, and carbon datasets.

The current repository includes realistic synthetic district-level data so the platform can be evaluated without protected credentials or large climate-data downloads.
