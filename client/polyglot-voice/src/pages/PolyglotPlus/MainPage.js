import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import "./MainPage.css";

export default function MainPage() {
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("English"); // Default to English

  // Fetch languages on component mount
  useEffect(() => {
    axios
      .get("http://localhost:5000/languages")
      .then((response) => {
        setLanguages(response.data.languages);
        // Optionally, ensure English is among the fetched languages and set it as selected
        if (response.data.languages.includes("English")) {
          setSelectedLanguage("English");
        }
      })
      .catch((error) => console.error("There was an error!", error));
  }, []);

  return (
    <>
      <Navbar />
      <div className="select-box">
        <div className="select-box__current" tabIndex="1">
          {languages.map((language, index) => (
            <div className="select-box__value" key={index}>
              <input
                className="select-box__input"
                type="radio"
                id={index.toString()}
                value={language} // Changed to language instead of index
                name="language"
                checked={selectedLanguage === language} // Control checked state
                onChange={() => setSelectedLanguage(language)} // Update state on change
              />
              <p className="select-box__input-text">{language}</p>
            </div>
          ))}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            className="icon select-box__icon"
            viewBox="0 0 1024 1024"
          >
            <path d="M903.232 256L960 306.432 512 768 64 306.432 120.768 256 512 659.072z"></path>
          </svg>
        </div>
        <ul className="select-box__list">
          {languages.map((language, index) => (
            <li key={index}>
              <label
                className="select-box__option"
                htmlFor={index.toString()}
                aria-hidden="true"
              >
                {language}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="main_pg_wrapper">
        <div className="left-container">
          <textarea
            className="input-frame text_frame"
            placeholder="Enter text"
          />
        </div>
        <div className="mid-container">
          <button>Click</button>
        </div>
        <div className="right-container">
          <div
            className="input-frame text_frame"
            placeholder="Enter text"
          ></div>
        </div>
      </div>
    </>
  );
}
