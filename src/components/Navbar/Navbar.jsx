import { Link } from "react-router-dom";
import "./Navbar.sass";

export default function Navbar() {
  return (
    <div className="nb">
      <Link to="/">
        <img src="/imgs/logo.png" alt="Logo" />
      </Link>
      <button className="btn btn-primary">Ingresar</button>
    </div>
  );
}
