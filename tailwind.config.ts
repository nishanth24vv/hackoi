import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { navy: '#06101e', cyan: '#4ce0ff', emerald: '#61f2a6', alert: '#ff9f43', danger: '#ff4d67' }, boxShadow: { glow: '0 0 60px rgba(76,224,255,.25)' } } }, plugins: [] };
export default config;
