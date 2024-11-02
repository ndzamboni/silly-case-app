import React, { useState } from "react";

function SillyCaseApp() {
  const [inputText, setInputText] = useState("");
  const [sillyText, setSillyText] = useState("");

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

  const handleConvertClick = () => {
    setSillyText(convertToSillyCase(inputText));
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
      <br />
      <button onClick={handleConvertClick} style={{ marginTop: "10px" }}>Convert to SillyCase</button>
      <h2>Output:</h2>
      <p>{sillyText}</p>
    </div>
  );
}

export default SillyCaseApp;
