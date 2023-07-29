import React, { useState, useEffect } from "react";

export const DarkModeContext = React.createContext({
  darkMode: true,
  setDarkMode: () => {},
});

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>{children}</DarkModeContext.Provider>;
}
