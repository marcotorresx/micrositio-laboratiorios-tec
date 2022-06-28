import React from "react";
import { useAppContext } from "context/Context";
import { addResource, updateResource } from "context/actions";
import "./ResourceForm.sass";
import { useNavigate } from "react-router-dom";

export default function ResourceForm() {
  // Variables
  const { categoryOnView, resourceOnView } = useAppContext();
  const [editMode] = React.useState(!!resourceOnView);

  // Input values
  const [title, setTitle] = React.useState(
    editMode ? resourceOnView.title : ""
  );
  const [description, setDescription] = React.useState(
    editMode ? resourceOnView.description : ""
  );
  const [link, setLink] = React.useState(editMode ? resourceOnView.link : "");

  // Tools
  const navigate = useNavigate();

  // Action handler
  function actionHandler() {
    // Validate fields
    if (
      !title.trim() ||
      title === "" ||
      !description.trim() ||
      description === "" ||
      !link.trim() ||
      link === ""
    ) {
      alert("Debes llenar todos los campos");
      return;
    }

    // Make request
    if (editMode)
      updateResource(categoryOnView.id, {
        id: resourceOnView.id,
        title,
        description,
        link,
      });
    else addResource(categoryOnView.id, { title, description, link });

    // Go to category
    navigate("/category");
  }

  return (
    <div className="resource_form">
      {/* Title */}
      <h1>{editMode ? "Editar Recurso" : "Crear Recurso"}</h1>

      {/* Form */}
      <form>
        {/* Title */}
        <div className="mb-4">
          <label htmlFor="nombre" className="form-label">
            Título
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="form-label">
            Descripción
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
            id="description"
            rows="3"
          ></textarea>
        </div>

        {/* Link */}
        <div className="mb-4">
          <label htmlFor="link" className="form-label">
            Link de Vídeo en YouTube
          </label>
          <input
            type="text"
            className="form-control"
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

        {/* Add Btn */}
        <button
          type="button"
          className="btn btn-primary mt-2 w-100"
          onClick={actionHandler}
        >
          Guardar Recurso
        </button>
      </form>
    </div>
  );
}
