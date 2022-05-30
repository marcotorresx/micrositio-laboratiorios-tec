import React from "react";
import Resource from "components/Resource/Resource";
import { Context } from "Context";
import "./Category.sass";

export default function Category() {
  const { hello } = React.useContext(Context);

  console.log(hello);

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
    </div>
  );
}
