import { useState, useEffect } from "react";

export const useSceenInfo = () => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const handleResize = () => setScreenWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const isMobile = screenWidth < 768;

  return { isMobile };
};
