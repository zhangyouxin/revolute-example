/* eslint-disable @typescript-eslint/ban-ts-comment */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

//@ts-ignore
import "swiper/css";
//@ts-ignore
import "swiper/css/pagination";
//@ts-ignore
import "swiper/css/navigation";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
