'use client'

// context/AppContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AppContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
  theme: string;
  setTheme: (theme: string) => void;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [theme, setTheme] = useState('dark'); // default theme

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <AppContext.Provider value={{ activeSection, setActiveSection, theme, setTheme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
