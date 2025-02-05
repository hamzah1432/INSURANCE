import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/HomePage"));
const About = lazy(() => import("../pages/AboutPage"));
const Settings = lazy(() => import("../pages/SettingPage"));
const HelpPage = lazy(() => import("../pages/HelpPage"));
const MobileLayout = lazy(() => import("../layouts/MobileLayout"));
const DesktopLayout = lazy(() => import("../layouts/DesktopLayout"));

const Loading = () => <div>Loading...</div>;

const AppRoutes: React.FC = () => (
  <Router>
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={window.innerWidth < 768 ? <MobileLayout /> : <DesktopLayout />}>
          <Route index element={<Home />} />
          <Route path="insurance" element={<About/>} />
          <Route path="settings" element={<Settings />} />
          <Route path="help" element={<HelpPage />} />
        </Route>
      </Routes>
    </Suspense>
  </Router>
);

export default AppRoutes;