import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Registration_service from "./components/Registration_service";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />}/>
        <Route path="/registration_service" element={<Registration_service />}/>
        <Route path="/homepage" element={<RedirectToHtml page="template_hp.html" />} />
        <Route path="/homepage_service" element={<RedirectToHtml page="hp_service.html" />} />
      </Routes>
    </Router>
  );
}
const RedirectToHtml = ({ page }) => {
  window.location.href = `/${page}`;
  return null;
};

export default App;