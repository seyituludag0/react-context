import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { Checkbox } from "semantic-ui-react";

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
      <div class="ui fitted toggle checkbox">
          <Checkbox onClick={changeTheme} />
      </div>
    </div>
  );
}
