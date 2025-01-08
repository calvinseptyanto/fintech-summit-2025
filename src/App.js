import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />}/>
        <Route path="/homepage" element={<RedirectToHtml page="hp.html" />} />
      </Routes>
    </Router>
  );
}
const RedirectToHtml = ({ page }) => {
  window.location.href = `/${page}`;
  return null;
};

export default App;