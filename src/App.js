import React from "react";
import "./index.css";

import Home from "./routes/Home";
import ProjectLoremIpsum from "./routes/ProjectLoremIpsum";
import ProjectMetada from "./routes/ProjectMetada";
import About from "./routes/About";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ProjectLoremIpsum" element={<ProjectLoremIpsum />} />
        <Route path="/ProjectMetada" element={<ProjectMetada />} />
      </Routes>
    </Router>
  );
}

export default App;
