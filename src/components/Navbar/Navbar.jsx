import { useAppContext } from "context/Context";
import { Link } from "react-router-dom";
import "./Navbar.sass";

export default function Navbar() {
  // Variables
  const { isAdmin } = useAppContext();

  return (
    <div className="nb">
      {/* Home */}
      <Link to="/">
        <img src="/imgs/logo.png" alt="Logo" />
      </Link>

      {/* Categories or Login */}
      {isAdmin ? (
        <Link to="/private/categories">
          <button className="btn btn-primary">Categorías</button>
        </Link>
      ) : (
        <Link to="/login">
          <button className="btn btn-primary">Ingresar</button>
        </Link>
      )}
    </div>
  );
}
