import React from "react";
import { useAppContext } from "context/Context";
import { useNavigate } from "react-router-dom";
import "./Home.sass";

export default function Home() {
  const { categories, setCategoryOnView } = useAppContext();
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Info */}
      <h1>¡Bienvenido al Micrositio de Laboratorios!</h1>
      <h4>
        Aquí podrás buscar y ver los videos de los materiales del laboratorio
        que desees.
      </h4>
      <p className="categories_title">Categorías:</p>

      {/* Categories */}
      {categories.length > 0 ? (
        <div className="categories">
          {categories.map((c) => (
            <div
              className="item"
              key={c.id}
              onClick={() => {
                setCategoryOnView(c);
                navigate(`/category`);
              }}
            >
              <img src="/imgs/folder.png" alt="Folder" className="icon" />
              <p>{c.category || "Sin nombre"}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="no_data">No hay recursos en esta categoría</p>
      )}
    </div>
  );
}
