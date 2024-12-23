import React, { useEffect, useRef } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Scroll from "./Components/Scroll";
import Landing from "./Components/Landing";
import DoIt from "./Components/DoIt";


const App = () => {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/scroll" element={<Scroll />} />
          <Route exact path="/doit" element={<DoIt />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
