import React, { useState } from "react";

function Textfield(props) {
  const [Text, setText] = useState("");

  return (
    <div className={`text-${props.mode === "light" ? "dark" : "light"}`}>
      <div className="container mb-3 ">
        <h1 className="my-2">WELCOME TO TEXT UTILS </h1>
        <textarea
          className={`form-control bg-${props.mode} text-${
            props.mode === "light" ? "dark" : "light"
          } my-3 `}
          value={Text}
          rows="5"
          placeholder="Enter your text here..."
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
        <button
          className="btn"
          style={{
            backgroundColor: props.mode === "light" ? "#0d6efd" : "#700B97",
            color: "white",
          }}
          onClick={() => {
            if (Text === "") {
              props.alert(
                "Please enter some text first",
                "warning",
                "exclamation-triangle-fill"
              );
            } else {
              setText(Text.toUpperCase());
              props.alert(
                "Your text has been Converted to Upper Case",
                "success",
                "check-circle-fill"
              );
            }
          }}
        >
          CHANGE TO UPPERCASE
        </button>
        <button
          className="btn mx-2"
          style={{
            backgroundColor: props.mode === "light" ? "#0d6efd" : "#700B97",
            color: "white",
          }}
          onClick={() => {
            if (Text === "") {
              props.alert(
                "Please enter some text first",
                "warning",
                "exclamation-triangle-fill"
              );
            } else {
              setText(Text.toLowerCase());
              props.alert(
                "Your text has been Converted to Lowercase",
                "success",
                "check-circle-fill"
              );
            }
          }}
        >
          change to lowercase
        </button>
        <button
          className="btn"
          style={{
            backgroundColor: props.mode === "light" ? "#0d6efd" : "#700B97",
            color: "white",
          }}
          onClick={() => {
            if (Text === "") {
              props.alert(
                "Please enter some text first",
                "warning",
                "exclamation-triangle-fill"
              );
            } else {
              navigator.clipboard.writeText(Text);
              props.alert(
                "Your text has been Copied to clipboard",
                "success",
                "check-circle-fill"
              );
            }
          }}
        >
          Copy to clipboard
        </button>
        <button
          className="btn mx-2"
          style={{
            backgroundColor: props.mode === "light" ? "#0d6efd" : "#700B97",
            color: "white",
          }}
          onClick={() => {
            if (Text === "") {
              props.alert(
                "Please enter some text first",
                "warning",
                "exclamation-triangle-fill"
              );
            } else {
              let caps_words = Text.split(" ");
              for (let i = 0; i < caps_words.length; i++) {
                caps_words[i] =
                  caps_words[i][0].toUpperCase() + caps_words[i].substr(1);
              }
              setText(caps_words.join(" "));
              props.alert(
                "Your text has been capitalize Each Word",
                "success",
                "check-circle-fill"
              );
            }
          }}
        >
          Capitalize Word
        </button>
        <button
          className="btn"
          style={{
            backgroundColor: props.mode === "light" ? "#0d6efd" : "#700B97",
            color: "white",
          }}
          onClick={() => {
            if (Text === "") {
              props.alert(
                "Please enter some text first",
                "warning",
                "exclamation-triangle-fill"
              );
            } else {
              const toggle_text = Text.split("")
                .map((word, index) => {
                  if (word === word.toLowerCase()) {
                    console.log("Lower Case");
                    return word.toUpperCase();
                  } else {
                    console.log("Upper Case");
                    return word.toLowerCase();
                  }
                })
                .join("");
              setText(toggle_text);
              props.alert(
                "Your text has been capitalize Each Word",
                "success",
                "check-circle-fill"
              );
            }
          }}
        >
          tOGGLE tEXT
        </button>
        <button
          className="btn mx-2"
          style={{
            backgroundColor: props.mode === "light" ? "#0d6efd" : "#700B97",
            color: "white",
          }}
          onClick={() => {
            if (Text === "") {
              props.alert(
                "Please enter some text first",
                "warning",
                "exclamation-triangle-fill"
              );
            } else {
              let toggle_words = Text.split("")
                .map((word, index) => {
                  if (index % 2 === 0) {
                    return word.toLowerCase();
                  } else {
                    return word.toUpperCase();
                  }
                })
                .join("");
              setText(toggle_words);
              props.alert(
                "Your text has been capitalize Each Word",
                "success",
                "check-circle-fill"
              );
            }
          }}
        >
          ToGgLe TeXt
        </button>
        <button
          className="btn "
          style={{
            backgroundColor: props.mode === "light" ? "#0d6efd" : "#700B97",
            color: "white",
          }}
          onClick={() => {
            if (Text === "") {
              props.alert(
                "Please enter some text first",
                "warning",
                "exclamation-triangle-fill"
              );
            } else {
              var a = window.confirm("Are you sure??");
              a === true ? setText("") : console.log("");
              props.alert(
                "Your text has been cleared",
                "success",
                "check-circle-fill"
              );
            }
          }}
        >
          <span style={{ textDecorationLine: "line-through" }}>Clear Text</span>
        </button>
      </div>
      <div className="container">
        <h1>Your text summary</h1>
        <h5>
          {Text.trim().split(" ").length} Words {Text.length} Characters
        </h5>
        <h2>Preview</h2>
        <p>
          {Text === "" ? "This is the preview of what you will added." : Text}
        </p>
      </div>
    </div>
  );
}

export default Textfield;
