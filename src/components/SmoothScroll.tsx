'use client';

import { ReactLenis } from 'lenis/react';
import { useEffect, useState } from 'react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ 
      lerp: 0.1, // Controla la suavidad (0.1 es muy suave)
      duration: 1.5, // Duración del desplazamiento
      smoothWheel: true 
    }}>
      {children}
    </ReactLenis>
  );
}