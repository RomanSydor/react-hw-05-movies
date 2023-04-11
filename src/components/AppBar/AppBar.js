import React from "react";
import { Outlet } from "react-router-dom";
import Container from "../Container";
import Navigation from "../Navigation";
import s from "./AppBar.module.css";

const AppBar = () => {
  return (
    <>
      <header className={s.AppBar}>
        <Navigation />
      </header>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default AppBar;
