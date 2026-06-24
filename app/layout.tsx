import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'ClimateVerse | National Climate Digital Twin of India', description: 'Predict. Simulate. Adapt. A national-scale AI climate command center for India.' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
