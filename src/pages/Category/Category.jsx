import React from "react";
import Resource from "components/Resource/Resource";
import "./Category.sass";
import { useAppContext } from "context/Context";
import { getResources } from "context/actions";

export default function Category() {
  // Variables
  const { categoryOnView: category, isAdmin } = useAppContext();
  const [loaded, setLoaded] = React.useState(false);
  const [resources, setResources] = React.useState(null);

  // Get resources
  async function getResourcesHandler() {
    const resourcesRes = await getResources(category.id);
    if (resourcesRes) setResources(resourcesRes);
    setLoaded(true);
  }

  React.useEffect(() => {
    getResourcesHandler();
  });

  return (
    loaded && (
      <div className="category">
        {/* Title */}
        <h1>{category.category}</h1>

        {/* Resources */}
        {resources?.length > 0 ? (
          <div className="resources">
            {resources.map((r) => (
              <Resource resource={r} key={r.id} />
            ))}
          </div>
        ) : (
          <p className="no_resources">No hay recursos en esta categoría</p>
        )}

        {/* Delete Btn */}
        {isAdmin && (
          <button className="btn btn-danger mt-2">Eliminar Categoría</button>
        )}
      </div>
    )
  );
}
