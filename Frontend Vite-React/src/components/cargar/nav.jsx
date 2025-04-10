import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './Nav.css';
import { Link } from "react-router-dom";
export const Nav = () => {
    return (
    <nav className="Nav container-fluid p-5">
      <ul className="rounded-fill">
          <li className="">
            <Link className="activado" to="/cargar">CARGAR</Link>
          </li>
          <li className="">
            <Link className="" to="/editar">EDITAR</Link>
          </li>
          <li className="">
            <Link className="" to="/caja">CAJA</Link>
          </li>
          <li className="nav-item">
            <Link className="" to="/estadisticas">ESTADISTICAS</Link>
          </li>
      </ul>
    </nav>
    );
    }
// tambien para exportar puedo usar "export deafult Nav;" en vez de "export const Nav"