import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function Button() {
  const { theme, setTheme } = useContext(ThemeContext);
//   console.log(theme);

  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
    // console.log(theme);
  }

  return (
    <div>
      Active Theme: {theme} <br />
      <br />
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  );
}
