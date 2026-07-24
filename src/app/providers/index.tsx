import React from 'react';
import { ThemeProvider } from './ThemeProvider';

// Composes all application providers into a single component
export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
};
