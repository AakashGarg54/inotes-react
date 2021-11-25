import { useState } from "react";
import Navbar from "./Components/Navbar";
import Textfield from "./Components/Textfield";
import "./App.css";

function App() {
  const [mode, setMode] = useState("dark");

  return (
    <div className={`bg-${mode} first`}>
      <div className={`border border-top-0 border-end-0 border-start-0 border-${
            mode === "light" ? "dark" : "light"
          }`}>
        <Navbar
          mode={mode}
          toggleMode={() => {
            mode === "light" ? setMode("dark") : setMode("light");
          }}
        ></Navbar>
      </div>
      <div className="container">
        <Textfield mode={mode} />
      </div>
    </div>
  );
}

export default App;
