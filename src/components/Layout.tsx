import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout(): JSX.Element {
  return (
    <>
      <header className="layout-header">
        <h1 className="layout-title">Список компаний</h1>
      </header>
      <Outlet />
    </>
  );
}
