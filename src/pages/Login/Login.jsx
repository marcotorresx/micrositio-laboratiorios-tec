import React from "react";
import { useAppContext } from "context/Context";
import { useNavigate } from "react-router-dom";
import "./Login.sass";

export default function Login() {
  // Variables
  const { setIsAdmin } = useAppContext();

  // Tools
  const navigate = useNavigate();

  // Input values
  const [password, setPassword] = React.useState("");

  // Login as admin
  function loginAsAdmin() {
    if (password === "123123") {
      setIsAdmin(true);
      navigate("/private/categories");
    } else {
      setIsAdmin(false);
      alert("Contraseña incorrecta");
    }
  }

  return (
    <div className="login">
      <h1>Ingresar</h1>

      <form>
        <label htmlFor="password" className="form-label">
          Contraseña
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Ingresa la contraseña..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          className="btn btn-primary w-100 mt-3"
          onClick={loginAsAdmin}
        >
          Ingresar
        </button>
      </form>
    </div>
  );
}
