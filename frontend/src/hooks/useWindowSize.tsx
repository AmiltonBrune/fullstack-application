import { useState, useEffect } from 'react';

interface Breakpoints {
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

interface WindowSize {
  width: number;
  height: number;
  breakpoint: string;
}

const getBreakpoint = (width: number, breakpoints: Breakpoints): string => {
  if (width < breakpoints.sm) return 'xs';
  if (width < breakpoints.md) return 'sm';
  if (width < breakpoints.lg) return 'md';
  if (width < breakpoints.xl) return 'lg';
  return 'xl';
};

const useWindowSize = (
  sm: number = 768,
  md: number = 960,
  lg: number = 1280,
  xl: number = 1920
): WindowSize => {
  const breakpoints: Breakpoints = { sm, md, lg, xl };

  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
    breakpoint: getBreakpoint(window.innerWidth, breakpoints),
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        breakpoint: getBreakpoint(window.innerWidth, breakpoints),
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoints]);

  return windowSize;
};

export default useWindowSize;
