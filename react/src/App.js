import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SiteAuthProvider, SiteAuthScreen, useSiteAuth } from "site-auth-react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import "./App.css";

const SiteRoutes = () => {
  const { isAuthenticated } = useSiteAuth();
  const { REACT_APP_SITE_AUTH_WEBSITE_ID: websiteId } = process.env;

  if (!isAuthenticated) {
    return <SiteAuthScreen websiteId={websiteId} />;
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
};

function App() {
  return (
    <SiteAuthProvider>
      <SiteRoutes />
    </SiteAuthProvider>
  );
}

export default App;
