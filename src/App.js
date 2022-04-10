import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
      <Router>
        <Navbar mode={mode} txtw={txtw} />

        <Switch>
          <Route path="/react-main">
            <Home mode={mode} toggleMode={toggleMode} />
            <About txtw={txtw} />
            <Skills txtw={txtw} />
            <Contact txtw={txtw} />
          </Route>
          <Route path="/projects">
            <Projects mode={mode} toggleMode={toggleMode} />
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
