import "./Login.sass";

export default function Login() {
  return (
    <div className="login">
      <h1>Ingresar</h1>

      <form>
        <label for="password" className="form-label">
          Contraseña
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Ingresa la contraseña..."
        />
        <button type="button" className="btn btn-primary w-100 mt-3">
          Ingresar
        </button>
      </form>
    </div>
  );
}
