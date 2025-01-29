"use client";
import React, { ReactNode } from "react";
import AppBar from "./AppBar";

interface AppLayoutProps {
  children?: ReactNode;
}

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <AppBar />
      <main className="">{children}</main>
    </div>
  );
};

export default AppLayout;
