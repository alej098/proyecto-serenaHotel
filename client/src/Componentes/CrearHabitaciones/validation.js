const validation = (habitacionData) => {
  const errors = {};

  if (!/^.{3,}$/.test(habitacionData.nombre)) {
    errors.nombre = "El nombre debe contener al menos 3 letras";
  }

  if (!/^.{1,250}$/.test(habitacionData.imagen)) {
    errors.imagen = "La URL de la imagen debe tener menos de 250 caracteres";
  }

  if (!/^[\s\S]{200,}$/.test(habitacionData.descripcion)) {
    errors.descripcion = "La descripción debe contener al menos 200 palabras";
  }

  if (habitacionData.servicios.length === 0) {
    errors.servicios = "Debes elegir al menos un servicio";
  }

  return errors;
};

export default validation;
