import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

function App(props) {
  const [mode, setMode] = useState("light");
  const [txtw, setTxtw] = useState("black");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("darka");
      document.body.style.backgroundColor = "black";
      document.body.style.transition = "0.8s ease-in-out";
      setTxtw("white");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setTxtw("black");
    }
  };

  return (
    <div className="App">
      <Navbar mode={mode} txtw={txtw} />
      <Home mode={mode} toggleMode={toggleMode} />
      <About txtw={txtw} />
      <Skills txtw={txtw} />
      <Contact txtw={txtw} />
    </div>
  );
}

export default App;
