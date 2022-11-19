import React from "react";
import { addCategory, updateCategory, uploadBanner } from "context/actions";
import toast from "react-hot-toast";
import "./CategoryForm.sass";
import { useAppContext } from "context/Context";
import { useNavigate, useParams } from "react-router-dom";

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
  const [imgUrl, setImgUrl] = React.useState(null);
  const [file, setFile] = React.useState(null);
  const navigate = useNavigate();

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

    // Upload banner
    let bannerPath = null;
    if (file) {
      bannerPath = await uploadBanner(file);
    }

    // Make request
    addCategory(
      categoryName,
      userAccess,
      bannerPath,
      categories,
      setCategories
    );

    // Clean values
    setCategoryName("");
    setUserAccess("student");
    toast.success("Categoría añadida");
    navigate("/private/categories");
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

  function getUrlBanner() {
    if (file) setImgUrl(URL.createObjectURL(file));
    else if (category?.bannerPath) setImgUrl(category?.bannerPath);
    else setImgUrl(null);
  }

  React.useEffect(() => {
    getUrlBanner();
    // eslint-disable-next-line
  }, [file]);

  return (
    <div className="category_form">
      {/* Title */}
      <h1>{editMode ? "Editar Categoría" : "Añadir Categoría"}</h1>

      {/* Form */}
      <form>
        <label htmlFor="name" className="modal_label">
          Nombre de Categoría
        </label>
        <input
          id="name"
          className="form-control mb-3"
          placeholder="Nombre"
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <label htmlFor="user" className="modal_label">
          Acceso
        </label>
        <select
          className="form-select mb-3"
          id="user"
          value={userAccess}
          onChange={(e) => setUserAccess(e.target.value)}
        >
          <option value="public">Todos</option>
          <option value="student">Alumnos</option>
        </select>

        {/* Img input */}
        <label htmlFor="img_input" className="modal_label">
          Imágen de Banner
        </label>
        <input
          id="img_input"
          className="form-control mb-3"
          placeholder="Nombre"
          type="file"
          accept="img/*"
          onChange={(e) => setFile(e.target.files[0])}
        />

        {/* Banner preview */}
        {imgUrl && (
          <>
            <label htmlFor="img_input" className="modal_label">
              Previsulización de Banner
            </label>
            <img className="banner_preview" src={imgUrl} alt="Banner Preview" />
          </>
        )}
      </form>

      {/* Button */}
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
    </div>
  );
}
