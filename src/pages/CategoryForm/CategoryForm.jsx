import React from "react";
import { addCategory, updateCategory } from "context/actions";
import toast from "react-hot-toast";
import "./CategoryForm.sass";
import { useAppContext } from "context/Context";
import { useParams } from "react-router-dom";

export default function CategoryForm() {
  const {
    categoryOnView: category,
    categories,
    setCategories,
  } = useAppContext();
  const [editMode] = React.useState(useParams().mode === "edit");
  const [categoryName, setCategoryName] = React.useState(
    editMode ? category.category : ""
  );
  const [userAccess, setUserAccess] = React.useState(
    editMode ? category.userAccess : "public"
  );

  // Add category
  async function addCategoryHandler() {
    // Validate field
    if (
      categoryName === "" ||
      !categoryName.trim() ||
      userAccess === "" ||
      !userAccess.trim()
    ) {
      toast.error("Debes llenar el campo");
      return;
    }

    // Make request
    addCategory(categoryName, userAccess, categories, setCategories);

    // Clean values
    setCategoryName("");
    setUserAccess("student");
    toast.success("Categoría añadida");
  }

  // Edit category
  async function editCategoryHandler() {
    // Validate field
    if (
      categoryName === "" ||
      !categoryName.trim() ||
      userAccess === "" ||
      !userAccess.trim()
    ) {
      toast.error("Debes llenar el campo");
      return;
    }

    // Make request
    updateCategory(
      category.id,
      categoryName,
      userAccess,
      categories,
      setCategories
    );

    // Clean values
    setCategoryName("");
    setUserAccess("student");
    toast.success("Categoría actualizada");
  }

  return (
    <div className="category_form">
      <h1>{editMode ? "Editar Categoría" : "Añadir Categoría"}</h1>

      <form>
        <label htmlFor="add_name" className="modal_label">
          Nombre
        </label>
        <input
          id="add_name"
          className="form-control mb-3"
          placeholder="Nombre"
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <label htmlFor="add_user" className="modal_label">
          Acceso
        </label>
        <select
          className="form-select"
          id="add_user"
          value={userAccess}
          onChange={(e) => setUserAccess(e.target.value)}
        >
          <option value="public">Todos</option>
          <option value="student">Alumnos</option>
        </select>

        {editMode ? (
          <button
            className="btn btn-primary w-100 mt-5"
            type="button"
            onClick={editCategoryHandler}
          >
            Editar Categoría
          </button>
        ) : (
          <button
            className="btn btn-primary w-100 mt-5"
            type="button"
            onClick={addCategoryHandler}
          >
            Añadir Categoría
          </button>
        )}
      </form>
    </div>
  );
}
