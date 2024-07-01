// components/AuthWrapper.js
"use client";

import React from "react";
import { SiteAuthScreen, useSiteAuth } from "site-auth-react";

const SiteAuthWrapper = ({ children }) => {
  const { isAuthenticated, loading } = useSiteAuth();
  const websiteId = process.env.NEXT_PUBLIC_SITE_AUTH_WEBSITE_ID;

  if (loading) {
    // You can show a loading spinner here
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "monospace",
          fontSize: "1.5rem", 
          backgroundColor: "#f0f0f0"
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <>
      {!isAuthenticated && <SiteAuthScreen websiteId={websiteId} />}
      {isAuthenticated && children}
    </>
  );
};

export default SiteAuthWrapper;
