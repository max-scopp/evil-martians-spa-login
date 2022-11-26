import { useEffect, useState } from "react";

export const useTheme = () => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const darkModeMedia = matchMedia("(prefers-color-scheme: dark)");

    const handleModeChange = (matchesDarkMode: boolean) => {
      setMode(matchesDarkMode ? "dark" : "light");
    };

    darkModeMedia.addEventListener("change", (event: MediaQueryListEvent) => {
      handleModeChange(event.matches);
    });

    handleModeChange(darkModeMedia.matches);
  }, []);

  return {
    mode,
  };
};
