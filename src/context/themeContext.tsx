import { useContext, createContext, type ReactNode, useEffect, useState } from "react";

interface ThemeContextType {
  theme: "light" | "dark";
  lightTheme: () => void;
  darkTheme: () => void;
}

const ThemeContextValue = createContext<ThemeContextType>({
  theme: "light",
  darkTheme: () => { },
  lightTheme: () => { },
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {


  type ThemeType = "dark" | "light";

  const getSavedTheme = (): ThemeType => {
    const isDefaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const saved = localStorage.getItem('savedTheme');
    return (saved === "dark" || saved === "light") ? saved : isDefaultDark ? "dark" : "light";
  }

  const [theme, setTheme] = useState<ThemeType>(getSavedTheme());

  const lightTheme = () => setTheme("light");
  const darkTheme = () => setTheme("dark");

  useEffect(() => {

    if (theme) {
      document.body.classList.remove("dark", "light")
      document.body.classList.add(theme);
    }
    localStorage.setItem('savedTheme', theme)

  }, [theme]);


  return (
    <ThemeContextValue.Provider value={{ theme, lightTheme, darkTheme }}>
      {children}
    </ThemeContextValue.Provider>
  )
}

export const useTheme = () => {
  return useContext(ThemeContextValue);
}