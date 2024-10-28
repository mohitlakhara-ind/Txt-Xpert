import "./App.css";
import Navbar from "./components/Navbar.jsx";
import TxtSpace from "./components/TxtSpace.jsx";
import Alert from "./components/Alert.jsx";
import AboutUs from "./components/AboutUs.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");

      document.body.style.backgroundColor = "#1a1c1e";
      document.body.style.color = "#ffffff";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#1a1c1e";
      showAlert("Light Mode has been enabled", "success");
    }
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
          <Route
            path="/"
            element={
              <TxtSpace
                label="Enter Your text Here"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
