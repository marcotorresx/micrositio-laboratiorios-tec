import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "context/Context";
import "./Categories.sass";

export default function Categories() {
  // Variables
  const { categories, setCategoryOnView } = useAppContext();

  // Tools
  const navigate = useNavigate();

  return (
    <div className="categories">
      {/* Title */}
      <h1>Categorías</h1>

      {/* Categories */}
      <div className="categories_container">
        {/* Add Button */}
        <button
          type="button"
          className="btn btn-outline-primary btn-sm"
          onClick={() => {
            setCategoryOnView(null);
            navigate("/private/category/form/add");
          }}
        >
          Agregar Categoría
        </button>

        {/* List */}
        <ul className="list-group">
          {categories.map((c) => (
            <li
              className="list-group-item"
              key={c.id}
              onClick={() => {
                setCategoryOnView(c);
                navigate("/category");
              }}
            >
              {c.category}
              <button
                className="link"
                onClick={(e) => {
                  e.stopPropagation();
                  setCategoryOnView(c);
                  navigate("/private/category/form/edit");
                }}
              >
                Editar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
