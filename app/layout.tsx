import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rockoff Automation — Engineering the Future of Industry',
  description: 'Instrumentación industrial inalámbrica LoRa y soluciones de control Modbus para la industria peruana. Rockoff Instruments · Rockoff Controls.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
