import { Link } from "react-router-dom";
import "./Categories.sass";

export default function Categories() {
  return (
    <div className="categories">
      {/* Title */}
      <h1>Categories</h1>

      {/* Categories */}
      <div className="categories_container">
        {/* Add Button */}
        <button type="button" className="btn btn-outline-primary btn-sm">
          Agregar Categoría
        </button>

        {/* List */}
        <ul class="list-group">
          <li class="list-group-item">
            Categoría{" "}
            <Link to="category-edit/1" className="link">
              Editar
            </Link>
          </li>
          <li class="list-group-item">
            Categoría{" "}
            <Link to="category-edit/1" className="link">
              Editar
            </Link>
          </li>
          <li class="list-group-item">
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
