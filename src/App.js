import React, { useState } from "react";

function SillyCaseApp() {
  const [inputText, setInputText] = useState("");

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

  const handleCopyClick = () => {
    navigator.clipboard.writeText(convertToSillyCase(inputText));
    alert("Text copied to clipboard!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>SillyCase Converter</h1>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter your sentence here..."
        rows="4"
        cols="50"
      />
      <h2>Output:</h2>
      <p>{convertToSillyCase(inputText)}</p>
      <button onClick={handleCopyClick} style={{ marginTop: "10px" }}>
        Copy Text
      </button>
    </div>
  );
}

export default SillyCaseApp;
