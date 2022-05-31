import "./ResourceForm.sass";

export default function ResourceForm() {
  return (
    <div className="resource_form">
      {/* Title */}
      <h1>Crear Recurso</h1>

      {/* Form */}
      <form>
        <div class="mb-4">
          <label for="nombre" class="form-label">
            Título
          </label>
          <input type="text" class="form-control" id="nombre" />
        </div>
        <div class="mb-4">
          <label for="description" class="form-label">
            Descripción
          </label>
          <textarea class="form-control" id="description" rows="3"></textarea>
        </div>
        <div class="mb-4">
          <label for="link" class="form-label">
            Link de Vídeo en YouTube
          </label>
          <input type="text" class="form-control" id="link" />
        </div>

        {/* Add Btn */}
        <button type="button" className="btn btn-primary mt-2 w-100">
          Guardar Recurso
        </button>
      </form>
    </div>
  );
}
