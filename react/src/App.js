import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SiteAuthProvider, SiteAuthScreen, useSiteAuth } from "site-auth-react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import "./App.css";

const SiteRoutes = () => {
  const { isAuthenticated, loading } = useSiteAuth();
  const { REACT_APP_SITE_AUTH_WEBSITE_ID: websiteId } = process.env;

  if (loading) {
    return (
      <>
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "monospace",
            fontSize: "1.5rem",
            backgroundColor: "#f0f0f0",
          }}
        >
          Loading...
        </div>
        ;
      </>
    );
  }

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
