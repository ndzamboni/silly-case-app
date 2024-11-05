import React, { useState } from "react";
import "./App.css";

function SillyCaseApp() {
  const [inputText, setInputText] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);

  const convertToSillyCase = (text) => {
    return text
      .split("")
      .map((char, index) =>
        index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
      )
      .join("");
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleCopyClick = async () => {
    if (inputText.trim() === "") return; // Prevent copying empty text
    try {
      await navigator.clipboard.writeText(convertToSillyCase(inputText));
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div>
      <h1>SillyCase Converter</h1>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter your sentence here..."
        rows="4"
        cols="50"
      />
      <h2>Output:</h2>
      <p className="output-text">{convertToSillyCase(inputText)}</p>
      <button onClick={handleCopyClick}>Copy Text</button>
      {copySuccess && <p className="copied-message">Copied!</p>}
    </div>
  );
}

export default SillyCaseApp;
