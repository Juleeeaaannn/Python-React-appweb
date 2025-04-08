import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './Nav.css';
import { Link } from "react-router-dom";
export const Nav = () => {
    return (
    <nav className="Nav container-fluid p-5">
      <ul class="rounded-fill">
          <li class="">
            <Link class="" to="/cargar">CARGAR</Link>
          </li>
          <li class="">
            <Link class="" to="/editar">EDITAR</Link>
          </li>
          <li class="">
            <Link class="" to="/caja">CAJA</Link>
          </li>
          <li class="nav-item">
            <Link class="" to="/estadisticas">ESTADISTICAS</Link>
          </li>
      </ul>
    </nav>
    );
    }
// tambien para exportar puedo usar "export deafult Nav;" en vez de "export const Nav"