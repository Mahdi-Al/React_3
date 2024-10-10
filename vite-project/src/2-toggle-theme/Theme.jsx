import { useState } from "react";
import "./theme.css";
function ChangeTheme() {
  const [isDarkTheme, setDarkTheme] = useState(true);
  const toggleTheme = () => {
    setDarkTheme(!isDarkTheme);
  };
  return (
    <div className={isDarkTheme ? "light-theme" : "dark-theme"}>
      <p>{isDarkTheme ? "Dark" : "Light"}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
export default ChangeTheme;
