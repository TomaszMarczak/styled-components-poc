import { createContext, useContext, ReactNode } from "react";

interface ThemeContextType {
  colors: {
    light: string;
    dark: string;
  };
}

export const ThemeContext = createContext({} as ThemeContextType);
export const useThemeContext = () => useContext(ThemeContext);
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const randomColor = (): string => {
    //Generate random hex number between 0 and 16777215 (0xFFFFFF) and convert it to a string
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    //Add # to the beginning of the color
    return "#" + randomColor;
  };
  const values = {
    colors: {
      light: "#fff",
      dark: "#000",
    },
  };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};
