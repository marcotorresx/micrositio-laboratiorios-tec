import { useAppContext } from "context/Context";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import "./Navbar.sass";

export default function Navbar() {
  // Variables
  const { isAdmin, setIsAdmin } = useAppContext();

  // Logout admin
  function logoutAdmin() {
    setIsAdmin(false);
  }

  return (
    <div className="navbar">
      {/* Home */}
      <Link to="/">
        <img src="/imgs/logo.png" alt="Logo" />
      </Link>

      {/* Categories or Login */}
      {isAdmin ? (
        <div>
          <Link to="/private/categories">
            <button className="btn btn-primary">Categorías</button>
          </Link>
          <button className="btn btn-outline-danger" onClick={logoutAdmin}>
            Salir
          </button>
        </div>
      ) : (
        <Link to="/login">
          <button className="btn btn-primary">Ingresar</button>
        </Link>
      )}

      {/* Toaster */}
      <Toaster
        toastOptions={{
          duration: 5000,
          style: {
            fontSize: "16px",
            fontWeight: "400",
            textAlign: "center",
          },
          success: {
            style: {
              background: "#EDF7ED",
              color: "#416443",
            },
          },
          error: {
            style: {
              background: "#FDEDED",
              color: "#814C4B",
            },
          },
        }}
      />
    </div>
  );
}
