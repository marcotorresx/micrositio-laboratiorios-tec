import React from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.sass";
import { useAppContext } from "context/Context";
import GenericModal from "components/GenericModal/GenericModal";
import { addCategory, updateCategory } from "context/actions";
import toast from "react-hot-toast";

export default function Categories() {
  // Variables
  const { categories, setCategories, setCategoryOnView } = useAppContext();
  const [showAddModal, setShowAddModal] = React.useState(false);
  const [showEditModal, setShowEditModal] = React.useState(false);
  const [categoryName, setCategoryName] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  // Tools
  const navigate = useNavigate();

  // Add category
  async function addCategoryHandler() {
    // Validate field
    if (categoryName === "" || !categoryName.trim()) {
      toast.error("Debes llenar el campo");
      return;
    }

    // Make request
    addCategory(categoryName, categories, setCategories);

    // Clean values
    setCategoryName("");
    setShowAddModal(false);
    toast.success("Categoría añadida");
  }

  // Edit category
  async function editCategoryHandler() {
    // Validate field
    if (categoryName === "" || !categoryName.trim()) {
      toast.error("Debes llenar el campo");
      return;
    }

    // Make request
    updateCategory(
      selectedCategory.id,
      categoryName,
      categories,
      setCategories
    );

    // Clean values
    setCategoryName("");
    setShowEditModal(false);
    toast.success("Categoría actualizada");
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
                  setCategoryName(c.category);
                  setSelectedCategory(c);
                  setShowEditModal(true);
                }}
              >
                Editar
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
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </GenericModal>
      )}

      {/* Edit category modal */}
      {showEditModal && (
        <GenericModal
          title="Editar Categoría"
          onContinue={editCategoryHandler}
          onCancel={() => setShowEditModal(false)}
        >
          <input
            className="form-control"
            placeholder="Nuevo nombre"
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </GenericModal>
      )}
    </div>
  );
}
