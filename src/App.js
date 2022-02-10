import React from "react";
import HomePage from "./HomePage";
import SnortLog from "./SnortLog";
import ComplaintPage from "./ComplaintPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="" element = {<HomePage />} />
          <Route path="SnortLog" element= {<SnortLog />} />
          <Route path="ComplaintPage" element= {<ComplaintPage />} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
