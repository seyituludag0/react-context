import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import "../App.css";
export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
//   console.log("Header Template: ", theme);

  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div>
      Header Template {theme} <br />
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  );
}
