import React from "react";
import Resource from "components/Resource/Resource";
import "./Category.sass";
import { useAppContext } from "context/Context";
import { getResources, deleteCategory } from "context/actions";
import { useNavigate } from "react-router-dom";
import GenericModal from "components/GenericModal/GenericModal";

export default function Category() {
  // Variables
  const {
    categoryOnView: category,
    isAdmin,
    categoryOnView,
    setCategoryOnView,
    setResourceOnView,
    categories,
    setCategories,
  } = useAppContext();
  const [loaded, setLoaded] = React.useState(false);
  const [resources, setResources] = React.useState(null);
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);

  // Tools
  const navigate = useNavigate();

  // Get resources
  async function getResourcesHandler() {
    const resourcesRes = await getResources(category.id);
    if (resourcesRes) setResources(resourcesRes);
    setLoaded(true);
  }

  // Delete category handler
  function deleteCategoryHandler() {
    deleteCategory(categoryOnView.id);
    setCategories(categories.filter((c) => c.id !== categoryOnView.id));
    setCategoryOnView(null);
    alert("Categoría eliminada exitosamente");
    navigate("/");
  }

  React.useEffect(() => {
    getResourcesHandler();
  });

  return (
    loaded && (
      <div className="category">
        {/* Title */}
        <h1>{category.category}</h1>

        {isAdmin && (
          <button
            className="add_resource_btn btn btn-primary"
            onClick={() => {
              setResourceOnView(null);
              navigate("/private/resource");
            }}
          >
            + Agregar Recurso
          </button>
        )}

        {/* Resources */}
        {resources?.length > 0 ? (
          <div className="resources">
            {resources.map((r) => (
              <Resource resource={r} key={r.id} />
            ))}
          </div>
        ) : (
          <p className="no_data">No hay recursos en esta categoría</p>
        )}

        {/* Delete Btn */}
        {isAdmin && (
          <button
            className="btn btn-danger mt-2"
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
    )
  );
}
