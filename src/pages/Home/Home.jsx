import { Link } from "react-router-dom";
import "./Home.sass";

export default function Home() {
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
        <select class="form-select">
          <option value="1">Cat 1</option>
        </select>
        <Link to="/category/1">
          <button className="btn btn-outline-primary">Buscar</button>
        </Link>
      </div>
    </div>
  );
}
