import React from "react";
import "./Loader.sass";

export default function Loader() {
  return (
    <div className="loader_container">
      <img className="loader" src="/imgs/loader.gif" alt="Cargando" />
    </div>
  );
}
