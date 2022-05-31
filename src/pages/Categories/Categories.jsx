import React from "react";
import { Link } from "react-router-dom";
import { updateResource } from "context/actions";
import "./Categories.sass";

export default function Categories() {
  // async function get() {
  //   addResource("wUxNvRwGsksIUrZ2kqds");
  // }

  // React.useEffect(() => {
  //   get();
  // }, []);

  return (
    <div className="categories">
      {/* Title */}
      <h1>Categories</h1>

      {/* Categories */}
      <div className="categories_container">
        {/* Add Button */}
        <button
          type="button"
          className="btn btn-outline-primary btn-sm"
          onClick={() =>
            updateResource("wUxNvRwGsksIUrZ2kqds", "ePBJVKacGK1r3hy4pKYS")
          }
        >
          Agregar Categoría
        </button>

        {/* List */}
        <ul className="list-group">
          <li className="list-group-item">
            Categoría{" "}
            <Link to="category-edit/1" className="link">
              Editar
            </Link>
          </li>
          <li className="list-group-item">
            Categoría{" "}
            <Link to="category-edit/1" className="link">
              Editar
            </Link>
          </li>
          <li className="list-group-item">
            Categoría{" "}
            <Link to="category-edit/1" className="link">
              Editar
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
