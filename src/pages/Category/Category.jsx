import React from "react";
import "./Category.sass";
import { useAppContext } from "context/Context";
import { getResources, deleteCategory } from "context/actions";
import { useNavigate } from "react-router-dom";
import GenericModal from "components/GenericModal/GenericModal";
import Loader from "components/Loader/Loader";
import toast from "react-hot-toast";

export default function Category() {
  // Variables
  const {
    categoryOnView: category,
    isAdmin,
    setCategoryOnView,
    setResourceOnView,
    categories,
    setCategories,
  } = useAppContext();
  const [loaded, setLoaded] = React.useState(false);
  const [resources, setResources] = React.useState(null);
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const navigate = useNavigate();

  // Get resources
  async function getResourcesHandler() {
    const resourcesRes = await getResources(category.id);
    if (resourcesRes) setResources(resourcesRes);
    setLoaded(true);
  }

  // Delete category handler
  function deleteCategoryHandler() {
    deleteCategory(category.id);
    setCategories(categories.filter((c) => c.id !== category.id));
    setCategoryOnView(null);
    toast.success("Categoría eliminada");
    navigate("/private/categories");
  }

  // Get resource type
  function getResourceType(type) {
    switch (type) {
      case "video":
        return "Video";
      case "document":
        return "Documento";
      default:
        return "Documento";
    }
  }

  React.useEffect(() => {
    getResourcesHandler();
  });

  return loaded ? (
    <div className="category">
      {/* Title */}
      <h1>{category?.category || "Sin Título"}</h1>

      {/* Add Resource */}
      {isAdmin && (
        <div className="add_resource_btn_container">
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => {
              navigate("/private/resource/add");
            }}
          >
            + Agregar Recurso
          </button>
        </div>
      )}

      {/* Resources */}
      {resources?.length > 0 ? (
        <ul className="list-group resources_list">
          {resources.map((r) => (
            <li
              className="list-group-item resources_item"
              key={r.id}
              onClick={() => {
                setResourceOnView(r);
                navigate("/resource");
              }}
            >
              <p className="name">{r?.title || "Sin nombre"}</p>
              <p className="type">{getResourceType(r.type)}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no_data">No hay recursos en esta categoría</p>
      )}

      {/* Delete Btn */}
      {isAdmin && (
        <button
          className="btn btn-outline-danger btn-sm mt-5"
          onClick={() => setShowDeleteModal(true)}
        >
          Eliminar Categoría
        </button>
      )}

      {/* Delete category modal */}
      {showDeleteModal && (
        <GenericModal
          title="Borrar Categoría"
          onContinue={deleteCategoryHandler}
          onCancel={() => setShowDeleteModal(false)}
        >
          <p>¿Estás seguro que quieres borrar la categoría?</p>
        </GenericModal>
      )}
    </div>
  ) : (
    <Loader />
  );
}
