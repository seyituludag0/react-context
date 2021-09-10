import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import Button from "./Button";
import Header from "./Header";

export default function Container() {
  const { theme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <div className={`app ${theme === "dark" ? theme : ""}`}>
      <Header />
      <hr />
      < Button/>
    </div>
  );
}
