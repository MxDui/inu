import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useTheme = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const toggleTheme = () =>
    setTheme((prevTheme: any) => (prevTheme === "dark" ? "light" : "dark"));

  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(theme);
  }, [theme, toggleTheme]);
  return [theme, toggleTheme];
};
