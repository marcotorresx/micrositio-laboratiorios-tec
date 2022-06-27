import React from "react";
import { useAppContext } from "context/Context";
import { useNavigate } from "react-router-dom";
import "./Home.sass";

export default function Home() {
  // Variables
  const { categories, setCategoryOnView } = useAppContext();
  const [selectedCategory, setSelectedCategory] = React.useState("");

  // Tools
  const navigate = useNavigate();

  // Go to category
  function goToCategory() {
    if (selectedCategory === "" || selectedCategory === null) return;
    setCategoryOnView(JSON.parse(selectedCategory));
    navigate(`/category`);
  }

  return (
    <div className="home">
      {/* Info */}
      <h1>¡Bienvenido al Micrositio de Laboratorios!</h1>
      <h4>
        Aquí podrás buscar y ver los videos de los materiales del laboratorio
        que desees.
      </h4>
      <p>Selecciona la categoría que buscas:</p>

      {/* Category */}
      <div className="category">
        <select
          className="form-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="" disabled></option>
          {categories.map((c) => (
            <option key={c.id} value={JSON.stringify(c)}>
              {c.category || "Sin nombre"}
            </option>
          ))}
        </select>
        <button className="btn btn-outline-primary" onClick={goToCategory}>
          Buscar
        </button>
      </div>
    </div>
  );
}
