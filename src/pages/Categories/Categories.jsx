import React from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.sass";
import { useAppContext } from "context/Context";
import GenericModal from "components/GenericModal/GenericModal";
import { addCategory } from "context/actions";

export default function Categories() {
  // Variables
  const { categories, setCategories, setCategoryOnView } = useAppContext();
  const [showAddModal, setShowAddModal] = React.useState(false);
  const [newCategory, setNewCategory] = React.useState("");

  // Tools
  const navigate = useNavigate();

  // Add category
  async function addCategoryHandler() {
    // Validate field
    if (newCategory === "" || !newCategory.trim()) {
      alert("Debes llenar el campo");
      return;
    }

    // Make request
    addCategory(newCategory, categories, setCategories);

    // Clean values
    setNewCategory("");
    setShowAddModal(false);
  }

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
          onClick={() => setShowAddModal(true)}
        >
          Agregar Categoría
        </button>

        {/* List */}
        <ul className="list-group">
          {categories.map((c) => (
            <li className="list-group-item" key={c.id}>
              {c.category}
              <button
                className="link"
                onClick={() => {
                  setCategoryOnView(c);
                  navigate("/category");
                }}
              >
                Ver Categoría
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Add category modal */}
      {showAddModal && (
        <GenericModal
          title="Agregar Categoría"
          onContinue={addCategoryHandler}
          onCancel={() => setShowAddModal(false)}
        >
          <input
            className="form-control"
            placeholder="Nueva categoría"
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
        </GenericModal>
      )}
    </div>
  );
}
