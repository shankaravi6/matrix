import React, { useEffect, useRef } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Scroll from "./Scroll";
import Landing from "./Landing";


const App = () => {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Landing/>} />
          <Route exact path="/scroll" element={<Scroll/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
