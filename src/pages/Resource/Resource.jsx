import React from "react";
import "./Resource.sass";
import { useAppContext } from "context/Context";
import { useNavigate } from "react-router-dom";
import { deleteResource } from "context/actions";
import GenericModal from "components/GenericModal/GenericModal";
import toast from "react-hot-toast";

export default function Resource() {
  // Variables
  const {
    isAdmin,
    categoryOnView,
    resourceOnView: resource,
    setResourceOnView,
  } = useAppContext();
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);

  // Tools
  const navigate = useNavigate();

  // Delete Resource Handler
  function deleteResourceHandler() {
    setResourceOnView(null);
    deleteResource(categoryOnView.id, resource.id);
    toast.success("Recurso eliminado");
    navigate("/category");
  }

  return (
    <div className="resource">
      {/* Title */}
      <h1 className="title">{resource?.title || "Sin Título"}</h1>
      {isAdmin && (
        <div className="actions">
          <button
            className="btn btn-sm btn-outline-primary"
            onClick={() => {
              setResourceOnView(resource);
              navigate("/private/resource/edit");
            }}
          >
            Editar
          </button>
          <button
            className="btn btn-sm btn-outline-danger mx-2"
            onClick={() => setShowDeleteModal(true)}
          >
            Eliminar
          </button>
        </div>
      )}

      {/* Description */}
      {resource?.description && (
        <p className="description">{resource?.description}</p>
      )}

      {/* Doc or Video */}
      {resource?.type === "video" ? (
        <iframe
          width="560"
          height="315"
          src={resource?.link?.replace("watch?v=", "embed/")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="video"
        ></iframe>
      ) : (
        <a
          className="doc_link"
          href={resource.link}
          target="_blank"
          rel="noreferrer"
        >
          <button className="doc_btn">
            <img src="/imgs/drive.png" alt="Drive" />
            <p>Ver en Google Drive</p>
          </button>
        </a>
      )}

      {/* Delete Resource Modal */}
      {showDeleteModal && (
        <GenericModal
          title="Borrar Recurso"
          onContinue={deleteResourceHandler}
          onCancel={() => setShowDeleteModal(false)}
        >
          <p>¿Estás seguro que quieres borrar el recurso?</p>
        </GenericModal>
      )}
    </div>
  );
}
