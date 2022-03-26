import { useState } from "react";
import Navbar from "./Components/Navbar";
import Textfield from "./Components/Textfield";
import Alert from "./Components/Alert";
import "./App.css";
import About from "./Components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  const toLight = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark Mode Activate", "success", "info-fill");
    } else {
      setMode("light");
      showAlert("Light Mode Activate", "success", "info-fill");
    }
  };

  const showAlert = (message, type, symbol) => {
    setAlert({
      message: message,
      type: type,
      symbol: symbol,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };

  return (
    <Router>
      <div
        className={`first`}
        style={{ backgroundColor: mode === "light" ? "white" : "black" }}
      >
        <Navbar mode={mode} toggleMode={toLight}></Navbar>
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/about" element={<About mode={mode} />}></Route>
            <Route
              path="/"
              element={<Textfield mode={mode} alert={showAlert} />}
            ></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
