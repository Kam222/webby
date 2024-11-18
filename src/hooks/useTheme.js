import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      
      // Enhanced atmospheric dark mode
      document.body.style.setProperty('--slate-900', 'hsl(222, 47%, 4%)');
      document.body.style.setProperty('--bg-gradient', `
        radial-gradient(
          ellipse at top left,
          hsl(222, 47%, 9%),
          hsl(222, 47%, 5%) 50%,
          hsl(222, 47%, 3%)
        ),
        radial-gradient(
          circle at bottom right,
          hsl(230, 45%, 7%),
          transparent 60%
        )
      `);
      
      // Sophisticated atmospheric effects
      document.body.style.setProperty('--ambient-light', `
        radial-gradient(
          circle at 50% 0%,
          hsla(220, 100%, 90%, 0.03),
          transparent 60%
        )
      `);
      
      // Enhanced noise texture with lower opacity
      document.body.style.backgroundImage = `
        var(--ambient-light),
        url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E"),
        var(--bg-gradient)
      `;
      document.body.style.backgroundBlendMode = 'screen, overlay, normal';
      
      // Enhance text rendering
      document.body.style.fontSmooth = 'always';
      document.body.style.webkitFontSmoothing = 'antialiased';
      document.body.style.textRendering = 'optimizeLegibility';
      
    } else {
      root.classList.remove('dark');
      document.body.style.removeProperty('--slate-900');
      document.body.style.removeProperty('--bg-gradient');
      document.body.style.backgroundImage = 'none';
      document.body.style.removeProperty('font-smooth');
      document.body.style.removeProperty('-webkit-font-smoothing');
      document.body.style.removeProperty('text-rendering');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, setTheme];
};