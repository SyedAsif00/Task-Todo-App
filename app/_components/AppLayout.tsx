"use client";
import React, { ReactNode } from "react";

import AppBar from "./AppBar";

interface AppLayoutProps {
  children?: ReactNode;
}

// Basic app layout including App bar and sidebar
const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <React.Fragment>
      <AppBar />
      {children}
    </React.Fragment>
  );
};
export default AppLayout;
