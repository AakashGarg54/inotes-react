import React, { useState } from "react";

function Textfield(props) {

    const [Text, setText] = useState("");

    const clearText = () => {
      var a = window.confirm("Are you sure??");
      a === true ? setText("") : console.log("");

      }

  return (
    <div className={`text-${
      props.mode === "light" ? "dark" : "light"
    }`}>
      <div className="container mb-3 ">
        <h1 className="my-2">Enter your text here</h1>    
        <textarea
          className={`form-control bg-${props.mode} text-${props.mode === "light" ? "dark" : "light"} my-4 `} value={Text}
          rows="5" onChange={(e) => {setText(e.target.value)}}
        ></textarea>
        <button className="btn btn-primary" onClick={() => {setText(Text.toUpperCase())}}>Change to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={() => {setText(Text.toLowerCase())}}>Change to Lowercase</button>
        <button className="btn btn-primary" onClick={() => {navigator.clipboard.writeText(Text); window.alert("Text Copied")}}>Copy Your Text</button>
        <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
      </div>
      <div className="container">
          <h1>Your text summary</h1>
          <h5>{Text.split(' ').length } Words {Text.length} Characters</h5>
          <h2>Preview</h2>
          <p>{Text === "" ? "This is the preview of what you will added." : Text}</p>
      </div>
    </div>
  );
}

export default Textfield;
