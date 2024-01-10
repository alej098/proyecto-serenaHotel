import "./App.css";
import LandingPage from "./Componentes/LandingPage/LandingPage.jsx";
import ComentPage from "./Componentes/comentpage/comentpage.jsx";
import CreateComentPage from "./Componentes/CreateComentario/CreateComentario.jsx";
import Error404 from "./Componentes/Error 404/Error404.jsx";
import { Route, Routes } from "react-router-dom";
import CreateUsuario from "../src/Componentes/CreateUsuario/createUsuario.jsx";

import Habitaciones from "./Componentes/Habitaciones/Habitaciones.jsx";
import PasareladePago from "./Componentes/Pasarela-de-Pago/PasareladePago.jsx";
import axios from "axios";
import AcercaDeSerena from "./Componentes/AcercaDeSerena/AcercaDeSerena.jsx";
import DashBoarAdminHabitaciones from "./Componentes/DashBoarAdminHabitaciones/DashBoarAdminHabitaciones.jsx";
import DashBoarCliente from "./Componentes/DashboarCliente/DashCliente.jsx";
import Contactenos from "./Componentes/Contactenos/Contactenos.jsx";
import { Perfilusuario1 } from "./Componentes/PerfilUsuario/PerfilUsuario.jsx";
import DashBoarAdminUpdate from "./Componentes/updateHabitacion/dashboardAdminUpdate.jsx";
// Esta linea de codigo hace que por default todos los requerimientos en axios se hagan a esta ruta en el back
// Luego nos va a servir para hacer el Deploy del front
axios.defaults.baseURL = "http://localhost:3001/";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/habitaciones" element={<Habitaciones />} />
        <Route path="/acercadeserena" element={<AcercaDeSerena />} />
        <Route path="/contactenos" element={<Contactenos/>} />
        {/* La siguiente ruta captura cualquier otra ruta y muestra el componente 404 */}
        <Route path="*" element={<Error404 />} />
        <Route path="/admin_habitaciones" element={<DashBoarAdminHabitaciones/>} />
        <Route path="/cliente" element={<DashBoarCliente />} />
        <Route path="/pasareladePago" element={<PasareladePago />} />
        <Route path="/comentarios" element={<ComentPage />} />
        <Route path="/comentar" element={<CreateComentPage />} />
        <Route path="/usuario" element={<CreateUsuario />} />
        <Route path="/perfilUsuario" element={<Perfilusuario1 />} />
        <Route path="/admin_habitaciones/update" element={<DashBoarAdminUpdate/>} />
      </Routes>
    </>
  );
};

export default App;
