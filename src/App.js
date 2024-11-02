import React, { useState } from "react";

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

  const handleCopyClick = () => {
    navigator.clipboard.writeText(convertToSillyCase(inputText));
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000); // Hide message after 2 seconds
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
      {copySuccess && <p style={{ color: "green", marginTop: "10px" }}>Copied!</p>}
    </div>
  );
}

export default SillyCaseApp;
