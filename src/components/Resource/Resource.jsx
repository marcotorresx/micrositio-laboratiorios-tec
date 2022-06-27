import { useAppContext } from "context/Context";
import "./Resource.sass";

export default function Resource({ resource }) {
  // Variables
  const { isAdmin } = useAppContext();

  return (
    <div className="resource">
      {/* Title */}
      <div className="top">
        <h1>{resource.title || "Sin Título"}</h1>
        {isAdmin && (
          <button className="btn btn-sm btn-outline-primary">
            Editar Recurso
          </button>
        )}
      </div>

      {/* Description */}
      <p className="description">{resource.description || "Sin descripción"}</p>

      {/*  Video */}
      <iframe
        width="560"
        height="315"
        src={resource.link?.replace("watch?v=", "embed/")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
