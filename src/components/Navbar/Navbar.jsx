import { useAppContext } from "context/Context";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import "./Navbar.sass";

export default function Navbar() {
  // Variables
  const { isAdmin, isStudent, setIsAdmin, setIsStudent } = useAppContext();

  // Logout admin
  function logoutAdmin() {
    setIsAdmin(false);
    setIsStudent(false);
  }

  return (
    <div className="navbar">
      {/* Logo */}
      <Link to="/">
        <img src="/imgs/logo.png" alt="Logo" />
      </Link>

      {/* Buttons */}
      <div>
        <Link to="/">
          <button className="btn btn-outline-primary">Inicio</button>
        </Link>
        {isAdmin && (
          <Link to="/private/categories">
            <button className="btn btn-outline-primary">Categorías</button>
          </Link>
        )}
        {(isAdmin || isStudent) && (
          <button className="btn btn-outline-danger" onClick={logoutAdmin}>
            Salir
          </button>
        )}
        {!isAdmin && !isStudent && (
          <Link to="/login">
            <button className="btn btn-outline-primary">Ingresar</button>
          </Link>
        )}
      </div>

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
