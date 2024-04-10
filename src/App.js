import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
  };

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>{t("hello_world")}</h1>
      <select
        name="lang"
        id="lang"
        onChange={(e) => {
          changeLanguage(e.target.value);
        }}
      >
        <option value="hi">Hindi</option>
        <option value="en">English</option>
        <option value="ar">Arabic</option>
      </select>
      {/* <button
        onClick={() => changeLanguage(currentLanguage === "en" ? "ar" : "en")}
      >
        {currentLanguage === "en" ? "Switch to Spanish" : "Switch to English"}
      </button> */}
    </div>
  );
}

export default App;
