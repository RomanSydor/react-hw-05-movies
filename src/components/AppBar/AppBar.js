import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation";

const AppBar = () => {
  return (
    <>
      <header className="AppBar">
        <Navigation />
      </header>
      <Outlet />
    </>
  );
};

export default AppBar;
