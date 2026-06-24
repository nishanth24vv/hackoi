import { create } from 'zustand';
export type Layer = 'Temperature' | 'Rainfall' | 'Humidity' | 'Soil Moisture' | 'NDVI' | 'AQI' | 'Heatwave Risk' | 'Flood Risk' | 'Drought Risk' | 'Cyclone Risk' | 'Carbon Emissions' | 'Groundwater Stress' | 'Reservoir Levels';
type ClimateState = { activeLayer: Layer; selectedDistrict: string; setLayer: (layer: Layer) => void; setDistrict: (district: string) => void };
export const layers: Layer[] = ['Temperature', 'Rainfall', 'Humidity', 'Soil Moisture', 'NDVI', 'AQI', 'Heatwave Risk', 'Flood Risk', 'Drought Risk', 'Cyclone Risk', 'Carbon Emissions', 'Groundwater Stress', 'Reservoir Levels'];
export const useClimateStore = create<ClimateState>((set) => ({ activeLayer: 'Flood Risk', selectedDistrict: 'Guwahati', setLayer: (activeLayer) => set({ activeLayer }), setDistrict: (selectedDistrict) => set({ selectedDistrict }) }));
