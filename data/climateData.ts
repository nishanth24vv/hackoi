export type DistrictTwin = { district: string; state: string; basin: string; population: number; temp: number; rainfall: number; drought: number; flood: number; heat: number; aqi: number; reservoir: number; carbon: number; ndvi: number; groundwater: number; vulnerability: number; recommendation: string };
export const nationalKpis = [
  { label: 'Average Temperature', value: '31.8°C', trend: '+1.2°C', confidence: '±0.4', arrow: '↗' },
  { label: 'Rainfall Anomaly', value: '+14%', trend: 'wet west coast', confidence: '89%', arrow: '↗' },
  { label: 'Drought Severity', value: '0.42', trend: 'Bundelkhand watch', confidence: '83%', arrow: '→' },
  { label: 'Flood Risk', value: 'High', trend: '18 districts', confidence: '91%', arrow: '↗' },
  { label: 'Heatwave Risk', value: 'Orange', trend: 'Deccan plateau', confidence: '87%', arrow: '↗' },
  { label: 'AQI', value: '128', trend: 'Indo-Gangetic plain', confidence: '78%', arrow: '→' },
  { label: 'Reservoir Capacity', value: '62%', trend: '+8% inflow', confidence: '86%', arrow: '↗' },
  { label: 'Carbon Emissions', value: '2.72 Gt', trend: 'urban clusters', confidence: '81%', arrow: '↗' },
];
export const districts: DistrictTwin[] = [
  { district: 'Hyderabad', state: 'Telangana', basin: 'Krishna-Godavari', population: 10100000, temp: 35.2, rainfall: -8, drought: 58, flood: 34, heat: 82, aqi: 156, reservoir: 49, carbon: 74, ndvi: 0.31, groundwater: 72, vulnerability: 67, recommendation: 'Open cooling centers, reduce peak grid load, and pre-position water tankers.' },
  { district: 'Mumbai Suburban', state: 'Maharashtra', basin: 'West Coast', population: 9357000, temp: 31.1, rainfall: 42, drought: 12, flood: 88, heat: 46, aqi: 112, reservoir: 71, carbon: 82, ndvi: 0.42, groundwater: 44, vulnerability: 79, recommendation: 'Activate urban flood pumps, inspect drains, and issue commute advisories.' },
  { district: 'Guwahati', state: 'Assam', basin: 'Brahmaputra', population: 1110000, temp: 29.8, rainfall: 38, drought: 9, flood: 91, heat: 32, aqi: 96, reservoir: 66, carbon: 38, ndvi: 0.68, groundwater: 31, vulnerability: 84, recommendation: 'Move relief supplies to high-ground shelters and monitor river gauges hourly.' },
  { district: 'Guntur', state: 'Andhra Pradesh', basin: 'Krishna', population: 4887000, temp: 34.6, rainfall: -18, drought: 64, flood: 29, heat: 76, aqi: 121, reservoir: 53, carbon: 49, ndvi: 0.49, groundwater: 68, vulnerability: 63, recommendation: 'Shift irrigation schedules and prioritize paddy advisories for heat stress.' },
  { district: 'Jodhpur', state: 'Rajasthan', basin: 'Luni', population: 3687000, temp: 39.4, rainfall: -31, drought: 89, flood: 8, heat: 94, aqi: 142, reservoir: 22, carbon: 33, ndvi: 0.19, groundwater: 88, vulnerability: 86, recommendation: 'Declare heat action protocol and restrict non-essential outdoor work.' },
  { district: 'Kozhikode', state: 'Kerala', basin: 'West Coast', population: 3086000, temp: 30.4, rainfall: 36, drought: 11, flood: 74, heat: 28, aqi: 61, reservoir: 78, carbon: 27, ndvi: 0.74, groundwater: 29, vulnerability: 58, recommendation: 'Watch landslide-prone slopes and coordinate reservoir rule curves.' },
];
export const forecastSeries = [
  { horizon: '24h', rainfall: 72, temp: 32, confidence: 94 }, { horizon: '7d', rainfall: 86, temp: 33, confidence: 90 }, { horizon: '30d', rainfall: 103, temp: 34, confidence: 82 }, { horizon: 'Seasonal', rainfall: 111, temp: 34.8, confidence: 76 }, { horizon: 'Annual', rainfall: 98, temp: 35.1, confidence: 69 },
];
export const agents = ['Weather Agent', 'Flood Agent', 'Agriculture Agent', 'Water Agent', 'Energy Agent', 'Health Agent', 'Policy Agent'];
