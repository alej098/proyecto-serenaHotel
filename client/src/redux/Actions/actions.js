import axios from "axios";

export function getHabitaciones() {
  return async function (dispatch) {
    try {
      const habitaciones = await axios.get("/habitaciones");
      console.log("logdeaction", habitaciones.data);
      return dispatch({
        type: "GET_HABITACIONES",
        payload: habitaciones.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getHabitacionesBusqueda(buscar) {
  return {
    type: "GET_HABITACIONES_BUSQUEDA",
    payload: buscar,
  };
}
// creamos la action que crea la preferenciaId de mercadopago
export function createPreferenceMercadopagoId(data) {
  return async function (dispatch) {
    try {
      const preference = await axios.post(
        "mercadopago/create_preference",
        data
      );
      return dispatch({
        type: "CREATE_PREFERENCE_MERCADOPAGO_ID",
        payload: preference.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

// creamos la action añade las habitaciones al carrito de compras
export function addToCart(id) {
  return {
    type: "ADD_TO_CART",
    payload: id,
  };
}

// creamos la action que elimina del acarrito las habitaciones

export function postComent(state) {
  return async function (dispatch) {
    try {
      await axios.post("/comentar", state);
      alert("se añadió el comentario exitosamente");
    } catch (error) {
      alert(error);
    }
  };
}
export function postUsuario(state) {
  return async function (dispatch) {
    try {
      await axios.post("/usuario", state);
      console.log("log de action", state);
      alert("se creo el usuario exitosamente");
    } catch (error) {
      alert(error);
    }
  };
}

export function postUsuarioGoogle(data) {
  return async function (dispatch) {
    try {
      // Intentar crear o actualizar el usuario en la ruta "/usuario"
      const response = await axios.post("/usuario", data);
      if (response.status === 200 || response.status === 201) {
        const response2 = await axios.post("/login", data);

        const { token, userId, isAdmin, imagen, name } = response2.data;
        localStorage.setItem("name", JSON.stringify(name));
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("userId", JSON.stringify(userId));
        localStorage.setItem("isAdmin", JSON.stringify(isAdmin));
        localStorage.setItem("imagen", JSON.stringify(imagen));
        console.log("Respuesta del servidor con google:", response2.data);
        dispatch({
          type: "POST_USUARIO_GOOGLE",
          payload: response2.data,
        });
      }
    } catch (error) {
      console.error("Error al crear o actualizar el usuario:", error);
    }
  };
}

export function getAllcomentarios() {
  return async function (dispatch) {
    try {
      const response = await axios.get("/comentarios");
      if (response.status === 200) {
        dispatch({
          type: "GET_COMENTARIOS",
          payload: response.data,
        });
      }
    } catch (error) {
      alert(error.message);
    }
  };
}

export function eliminarComentario(id) {
  return async function (dispatch) {
    try {
      const response = await axios.delete(`/comentario/${id}`);
      console.log("log de actions", response);
      if (response.status === 200) {
        dispatch({
          type: "ELIMINAR_COMENTARIO",
          payload: id,
        });
        alert("Comentario eliminado exitosamente");
      }
    } catch (error) {
      alert(error.message);
    }
  };
}

export function enviarConsulta(formData) {
  return async function (dispatch) {
    try {
      const response = await axios.post("/contactenos", formData);
      console.log("Respuesta del servidor:", response.data);
    } catch (error) {
      console.error("Error al enviar la consulta:", error);
    }
  };
}

export function envioNotificion(formData) {
  return async function (dispatch) {
    try {
      const response = await axios.post("/contactenos", formData);
      console.log("Respuesta del servidor:", response.data);
    } catch (error) {
      console.error("Error al enviar la consulta:", error);
    }
  };
}

export function crearHabitacion(habitacionData) {
  console.log({ habitacionData });
  return async (dispatch) => {
    try {
      const response = await axios.post("/post/habitaciones", habitacionData);
      console.log(response.data);
      alert("Creado con exito");
      dispatch({
        type: "CREAR_HABITACION",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };
}

export function getHabitacionesNombre({
  direccion,
  filtrosPersonas,
  filtrosCuarto,
  tipoOrdenamiento,
}) {
  return async function (dispatch) {
    try {
      const habitaciones = await axios.get(
        `/ordenamientos&filtros?ordenarPor=${tipoOrdenamiento}&direccion=${direccion}&filtroPersonas=${filtrosPersonas}&filtroCuarto=${filtrosCuarto}`
      );
      console.log("Aquí está la respuesta de la API:", habitaciones.data);
      return dispatch({
        type: "GET_HABITACIONES_NOMBRE",
        payload: habitaciones.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getHabitacionesPrecio({
  direccion,
  filtrosPersonas,
  filtrosCuarto,
  tipoOrdenamiento,
}) {
  return async function (dispatch) {
    try {
      const habitaciones = await axios.get(
        `/ordenamientos&filtros?ordenarPor=${tipoOrdenamiento}&direccion=${direccion}&filtroPersonas=${filtrosPersonas}&filtroCuarto=${filtrosCuarto}`
      );
      console.log("Aquí está la respuesta de la API:", habitaciones.data);
      return dispatch({
        type: "GET_HABITACIONES_PRECIO",
        payload: habitaciones.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getHabitacionesFiltrosPersonas({
  ordenado,
  direccion,
  personas,
  filtroCuarto,
}) {
  return async function (dispatch) {
    console.log(
      "Filtros Personas:",
      ordenado,
      direccion,
      personas,
      filtroCuarto
    );
    try {
      if (personas) {
        const habitaciones = await axios.get(
          `/ordenamientos&filtros?ordenarPor=${ordenado}&direccion=${direccion}&filtroPersonas=${personas}&filtroCuarto=${filtroCuarto}`
        );
        console.log("filtro personas:", habitaciones.data);
        return dispatch({
          type: "GET_HABITACIONES_FILTROS_PERSONAS",
          payload: habitaciones.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export const getReservas = ({ fecha_entrada, fecha_salida }) => {
  return async function (dispatch) {
    try {
      const reservas = await axios.get(
        `/reservas?fecha_entrada=${fecha_entrada}&fecha_salida=${fecha_salida}`
      );
      console.log("reservas:", reservas.data);
      return dispatch({
        type: "GET_RESERVAS",
        payload: reservas.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export function updateHabitacion(habitacionData) {
  console.log({ habitacionData });
  return async (dispatch) => {
    try {
      const response = await axios.put("/update/habitaciones", habitacionData);

      console.log(response.data);
      alert("Habitacion actualizada con exito");
      dispatch({
        type: "UPDATE_HABITACION",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };
}

export function getDevs() {
  return async function (dispatch) {
    try {
      const response = await axios("/desarrolladores");
      console.log("linea 135", response.data);
      return dispatch({
        type: "GET_DEVS",
        payload: response.data,
      });
    } catch (error) {
      alert(
        "Hubo un problema con el servidor. Comuniquese con el Administrador - Error: " +
          error
      );
      return;
    }
  };
}
export function estadoLogeo(estado) {
  return {
    type: "ESTADO_LOGEO",
    payload: estado,
  };
}
export function deleteHabitacion(id) {
  console.log({ id });
  return async function (dispatch) {
    try {
      const response = await axios.delete(`/habitaciones/${id}`);

      if (response.status === 200) {
        dispatch({
          type: "DELETE_HABITACION",
          payload: id,
        });
        alert("Habitacion eliminada exitosamente");
      }
    } catch (error) {
      alert(error.message);
    }
  };
}
export function getHabitacionesbackup() {
  return async function (dispatch) {
    try {
      const habitaciones = await axios.get("/habitaciones");
      return dispatch({
        type: "GET_HABITACIONES_BACKUP",
        payload: habitaciones.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getUsuarios() {
  return async function (dispatch) {
    try {
      const usuarios = await axios.get("/usuarios");
      return dispatch({
        type: "GET_USUARIOS",
        payload: usuarios.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateUsuario(usuarioData, id) {
  console.log({ usuarioData });
  return async (dispatch) => {
    try {
      console.log(usuarioData);
      id = usuarioData.id;
      const response = await axios.put(`/update/usuarios/${id}`, usuarioData);

      console.log(response.data);
      if (response.data === "No se encontro el usuario") alert(response.data);
      else alert("Usuario editado exitosamente");
      dispatch({
        type: "UPDATE_USUARIO",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };
}

export function deleteUsuario(id) {
  console.log({ id });
  return async function (dispatch) {
    try {
      const response = await axios.delete(`/delete/usuarios/${id}`);
      if (response.data === "No se encontro el usuario") {
        alert(response.data);
      } else {
        dispatch({
          type: "DELETE_USUARIO",
          payload: id,
        });
        alert("Usuario eliminado exitosamente");
      }
    } catch (error) {
      alert(error.message);
    }
  };
}

export function recuperarContraseñaAction(correo) {
  return async function () {
    try {
      const response = await axios.put("/recuperarContrasena", { correo });
      console.log("Respuesta del servidor:", response.data);
    } catch (error) {
      console.error("Error al enviar la consulta:", error);
    }
  };
}

export function verificacionLogeoUsuarioAction(infoLogeo) {
  console.log(infoLogeo);
  return async function () {
    try {
      const response = await axios.post("/login", infoLogeo);
      const { token, userId, isAdmin, imagen, name } = response.data;
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("userId", JSON.stringify(userId));
      localStorage.setItem("name", JSON.stringify(name));
      localStorage.setItem("isAdmin", JSON.stringify(isAdmin));
      localStorage.setItem("imagen", JSON.stringify(imagen));

      console.log("Respuesta del servidor manual:", response.data);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("Usuario o contraseña incorrectos");
      }
    }
  };
}

export function getReservas_usuario(usuarioId) {
  return async function (dispatch) {
    try {
      // URL = "http://localhost:3001/reservas-por-usuario?id=" + usuarioId
      const response = await axios.get("/reservas-por-usuario?id=" + usuarioId);
      console.log("Respuesta del servidor:", response.data);
      dispatch({
        type: "RESERVAS_USUARIO",
        payload: response.data,
      });
      //alert("Reservas del Usuario obtenidas exitosamente");
    } catch (error) {
      alert("Error al solicitar las Reservas por Usuario:", error);
      // console.log("Error al solicitar las Reservas por Usuario:",error);
    }
  };
}

export function getReservas_Admin(usuarioId) {
  return async function (dispatch) {
    try {
      const response = await axios.get("/reservas-todas");
      console.log("Respuesta del servidor:", response.data);
      dispatch({
        type: "RESERVAS_TODAS_ADMIN",
        payload: response.data,
      });
      //alert("Reservas del Usuario obtenidas exitosamente");
    } catch (error) {
      alert("Error al solicitar las Reservas por Usuario:", error);
      // console.log("Error al solicitar las Reservas por Usuario:",error);
    }
  };
}
export function verificarToken() {
  return async function (dispatch) {
    try {
      const token = localStorage.getItem("token");
      console.log("token", token);
      if (token) {
        dispatch({
          type: "VERIFICARTOKEN",
          payload: true,
        });
      } else {
        dispatch({
          type: "VERIFICARTOKEN",
          payload: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}
export function DetailHabitaciones(id) {
  return async function (dispatch) {
    try {
      console.log("antes de action", id);
      const response = await axios.get(`/habitaciones/${id}`);
      console.log("logdeaction234", response.data);
      dispatch({
        type: "DETAIL",
        payload: response.data,
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
}
export const getCarrito = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("/carrito");
      dispatch({
        type: "GET_CARRITO",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const eliminarDelCarrito = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.delete(`/carrito/${id}`);
      console.log("eliminarDelCarrito", response.data);
      dispatch({
        type: "DELETE_CARRITO",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const añadirAlCarrito = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(`/carrito/${id}`);
      dispatch({
        type: "AÑADIR_AL_CARRITO",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
