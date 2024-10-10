import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./2-toggle-theme/Theme.jsx";
import LikeAndDislike from "./3-likeAndDeslike/Like&Dislike.jsx";
import Handles from "./1-counter/Counter.jsx";
import ChangeTheme from "./2-toggle-theme/Theme.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Handles />
    <ChangeTheme />
    <LikeAndDislike />
    <App />
  </StrictMode>
);
