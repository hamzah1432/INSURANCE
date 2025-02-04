import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Layout from "../layouts/Layout";

const AppRoutes: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="insurance" element={<About />} />
        <Route path="settings" element={<Contact />} />
        <Route path="help" element={<Contact />} />
      </Route>
    </Routes>
  </Router>
);

export default AppRoutes;