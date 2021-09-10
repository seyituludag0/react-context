import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import "../App.css";
import { Checkbox } from "semantic-ui-react";
export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
//   console.log("Header Template: ", theme);

  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div>
      Header Template {theme} <br />
      <div class="ui fitted toggle checkbox">
          <Checkbox onClick={changeTheme} />
      </div>
    </div>
  );
}
