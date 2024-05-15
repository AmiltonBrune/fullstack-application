import { createContext, useState, useContext, ReactNode } from 'react';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface IThemeContext {
  toggleTheme(): void;
  theme: ITheme;
}

interface ITheme {
  title: string;

  colors: {
    primary: string;
    secondary: string;

    white: string;
    black: string;
    gray: string;

    success: string;
    info: string;
    warning: string;
  };
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ITheme>(() => {
    const themeSaved = localStorage.getItem('@vidflex:theme');

    if (themeSaved) return JSON.parse(themeSaved);
    else return dark;
  });

  const toggleTheme = () => {
    if (theme.title === 'dark') {
      setTheme(light);
      localStorage.setItem('@vidflex:theme', JSON.stringify(light));
    } else {
      setTheme(dark);
      localStorage.setItem('@vidflex:theme', JSON.stringify(dark));
    }
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = (): IThemeContext => {
  const context = useContext(ThemeContext);

  return context;
};

export { ThemeProvider, useTheme };
