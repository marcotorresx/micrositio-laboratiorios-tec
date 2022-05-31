import React from "react";
import Resource from "components/Resource/Resource";
import "./Category.sass";

export default function Category() {
  return (
    <div className="category">
      {/* Title */}
      <h1>Categoría</h1>

      {/* Resources */}
      <div className="resources">
        <Resource />
        <Resource />
        <Resource />
      </div>

      {/* Delete Btn */}
      <button className="btn btn-danger mt-2">Eliminar Categoría</button>
    </div>
  );
}
