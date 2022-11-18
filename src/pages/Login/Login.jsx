import React from "react";
import { useAppContext } from "context/Context";
import { useNavigate } from "react-router-dom";
import "./Login.sass";
import toast from "react-hot-toast";

export default function Login() {
  // Variables
  const { setIsAdmin, setIsStudent } = useAppContext();

  // Tools
  const navigate = useNavigate();

  // Input values
  const [userType, setUserType] = React.useState("student");
  const [password, setPassword] = React.useState("");

  // Login
  function login(e) {
    e.preventDefault();

    // Student login
    if (userType === "student" && password === "alumno123") {
      setIsStudent(true);
      setIsAdmin(false);
      navigate("/");
    } else if (userType === "admin" && password === "admin123") {
      setIsStudent(false);
      setIsAdmin(true);
      navigate("/private/categories");
    } else {
      setIsStudent(false);
      setIsAdmin(false);
      toast.error("Contraseña incorrecta");
    }
  }

  return (
    <div className="login">
      <h1>Ingresar</h1>

      <form onSubmit={login}>
        <label htmlFor="user_type" className="form-label">
          Usuario
        </label>
        <select
          className="form-select mb-3"
          id="user_type"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
        >
          <option value="student">Alumno</option>
          <option value="admin">Administrador</option>
        </select>

        <label htmlFor="password" className="form-label">
          Contraseña
        </label>
        <input
          type="password"
          className="form-control mb-4"
          id="password"
          placeholder="Ingresa la contraseña..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="sumbit" className="btn btn-primary w-100" onClick={login}>
          Ingresar
        </button>
      </form>
    </div>
  );
}
