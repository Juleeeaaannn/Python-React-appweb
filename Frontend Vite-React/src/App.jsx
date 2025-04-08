import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useEffect,useState } from "react";
import { Nav } from './components/nav/nav.jsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cargar from "./components/cargar/Cargar.jsx";
import Editar from "./components/editar/Editar.jsx";
import Caja from "./components/caja/Caja.jsx";
import Estadisticas from "./components/estadisticas/Estadisticas.jsx";
function App() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    fetch("/cargar")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
      });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
       <Nav />
      <Routes>
        <Route path="/cargar" element={<Cargar />} />
        <Route path="/editar" element={<Editar />} />
        <Route path="/caja" element={<Caja />} />
        <Route path="/estadisticas" element={<Estadisticas />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
