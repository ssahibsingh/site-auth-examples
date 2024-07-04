import "./src/styles/global.css";

// wrapRooElement

import React from "react";
import { SiteAuthProvider } from "site-auth-react";
import SiteAuthWrapper from "./src/components/SiteAuthWrapper";

export const wrapRootElement = ({ element }) => {
  return (
    <SiteAuthProvider>
      <SiteAuthWrapper>{element}</SiteAuthWrapper>
    </SiteAuthProvider>
  );
};
