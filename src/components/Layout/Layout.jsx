import Navbar from "components/Navbar/Navbar";
import React from "react";
import Router from "router/Router";
import "./Layout.sass";

export default function Layout() {
  return (
    <div className="App">
      <Navbar />
      <div className="app_container">
        <Router />
      </div>
    </div>
  );
}
